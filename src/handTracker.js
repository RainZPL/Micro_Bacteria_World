import { GestureLogic } from './gestureLogic.js';

const MEDIAPIPE_HANDS_VERSION = '0.4.1675469240';
const MEDIAPIPE_CAMERA_VERSION = '0.3.1675466862';
const MEDIAPIPE_HANDS_URL = `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${MEDIAPIPE_HANDS_VERSION}/hands.js`;
const MEDIAPIPE_CAMERA_URL = `https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@${MEDIAPIPE_CAMERA_VERSION}/camera_utils.js`;

let mediapipeLoadPromise = null;

const loadScript = (url) => new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${url}"]`);
    if (existing) {
        if (existing.dataset.loaded === 'true') {
            resolve();
            return;
        }
        if (existing.dataset.failed === 'true') {
            existing.remove();
        } else {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', () => reject(new Error(`Failed to load ${url}`)));
            return;
        }
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = () => {
        script.dataset.loaded = 'true';
        resolve();
    };
    script.onerror = () => {
        script.dataset.failed = 'true';
        reject(new Error(`Failed to load ${url}`));
    };
    document.head.appendChild(script);
});

const ensureMediapipeLoaded = async () => {
    if (globalThis.Hands && globalThis.Camera) return;

    if (!mediapipeLoadPromise) {
        mediapipeLoadPromise = Promise.all([
            loadScript(MEDIAPIPE_HANDS_URL),
            loadScript(MEDIAPIPE_CAMERA_URL)
        ]).catch((err) => {
            mediapipeLoadPromise = null;
            throw err;
        });
    }

    await mediapipeLoadPromise;
    if (!globalThis.Hands || !globalThis.Camera) {
        throw new Error('MediaPipe failed to load.');
    }
};

export class HandTracker {
    constructor(videoElement) {
        this.video = videoElement;
        this.ready = false;
        this.started = false;
        this.hands = null;
        this.camera = null;

        // State
        this.state = {
            right: { pinch: 0, rotate: 0, fist: 0, present: false },
            left: { isOK: false, present: false }
        };

        // Smoothing buffers
        this._raw = {
            r_pinch: 0, r_rotate: 0, r_fist: 0
        };

    }

    async _initMediapipe() {
        if (this.hands && this.camera) return;

        await ensureMediapipeLoaded();
        const HandsCtor = globalThis.Hands;
        const CameraCtor = globalThis.Camera;

        if (typeof HandsCtor !== 'function' || typeof CameraCtor !== 'function') {
            throw new Error('MediaPipe failed to initialize.');
        }

        this.hands = new HandsCtor({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${MEDIAPIPE_HANDS_VERSION}/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults(this._process.bind(this));

        this.camera = new CameraCtor(this.video, {
            onFrame: async () => {
                await this.hands.send({ image: this.video });
            },
            width: 640,
            height: 480 // Lower res sufficient for gesture
        });
    }

    _ensureVideoAttributes() {
        if (!this.video) return;
        this.video.setAttribute('playsinline', '');
        this.video.setAttribute('webkit-playsinline', '');
        this.video.muted = true;
        this.video.autoplay = true;
    }

    _formatCameraError(err) {
        const name = err?.name || 'Error';
        if (name === 'NotAllowedError') {
            return 'Camera permission denied. Please allow camera access and reload.';
        }
        if (name === 'NotFoundError') {
            return 'No camera device found.';
        }
        if (name === 'NotReadableError') {
            return 'Camera is already in use by another app.';
        }
        if (name === 'OverconstrainedError') {
            return 'Camera does not support the requested resolution.';
        }
        return `Camera start failed (${name}).`;
    }

    async start() {
        try {
            if (this.started) return;
            if (!this.video) {
                throw new Error('Camera element missing.');
            }

            let inIframe = false;
            try {
                inIframe = window.self !== window.top;
            } catch {
                inIframe = true;
            }
            if (inIframe) {
                throw new Error('Camera requires a top-level page. Open in a new tab.');
            }

            const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
            if (!window.isSecureContext && !isLocalhost) {
                throw new Error('Camera requires HTTPS or localhost.');
            }

            if (!navigator.mediaDevices?.getUserMedia) {
                throw new Error('Camera API not supported in this browser.');
            }

            this._ensureVideoAttributes();
            await this._initMediapipe();
            await this.camera.start();
            console.log("Camera Started");
            this.started = true;
        } catch (e) {
            console.error("Camera failed to start:", e);
            const message = e instanceof Error
                ? (e.name === 'Error' ? e.message : this._formatCameraError(e))
                : 'Camera start failed.';
            this.started = false;
            throw new Error(message);
        }
    }

    _process(results) {
        this.ready = true;
        this.state.right.present = false;
        this.state.left.present = false;
        this.state.left.isOK = false;

        if (results.multiHandLandmarks) {
            for (let i = 0; i < results.multiHandLandmarks.length; i++) {
                const lm = results.multiHandLandmarks[i];
                const label = results.multiHandedness[i].label; // "Left" or "Right"

                // Route (Swapped based on User Feedback)
                if (label === 'Right') {
                    this._updateLeft(lm); // User's Left is labeled Right in mirror? Or vice versa. Swapping to fix.
                } else {
                    this._updateRight(lm);
                }
            }
        }
    }

    _updateRight(lm) {
        this.state.right.present = true;

        // Raw
        const targetPinch = GestureLogic.calculatePinch(lm);
        const targetRot = GestureLogic.calculateRotation(lm);
        const targetFist = GestureLogic.calculateFist(lm);

        // Smooth (Lerp 0.2)
        this._raw.r_pinch += (targetPinch - this._raw.r_pinch) * 0.2;
        this._raw.r_fist += (targetFist - this._raw.r_fist) * 0.2;

        // Rotation wrap handling
        let dRot = targetRot - this._raw.r_rotate;
        while (dRot > Math.PI) dRot -= 2 * Math.PI;
        while (dRot < -Math.PI) dRot += 2 * Math.PI;
        this._raw.r_rotate += dRot * 0.2;

        // Update State
        this.state.right.pinch = this._raw.r_pinch;
        this.state.right.rotate = this._raw.r_rotate;
        this.state.right.fist = this._raw.r_fist;

        // Position (Wrist - Index 0)
        // MediaPipe coords are 0..1 (top-left origin).
        // Let's center it: 0.5, 0.5 -> 0, 0
        // And Flip Y (since 3D Y is up)
        this.state.right.x = (lm[0].x - 0.5) * 2.0; // -1 to 1
        this.state.right.y = -(lm[0].y - 0.5) * 2.0; // -1 to 1 (Up is positive)
    }

    _updateLeft(lm) {
        this.state.left.present = true;
        this.state.left.isOK = GestureLogic.detectOK(lm);
    }

    getInput() {
        return this.state;
    }
}
