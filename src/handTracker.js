import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { GestureLogic } from './gestureLogic.js';

export class HandTracker {
    constructor(videoElement) {
        this.video = videoElement;
        this.ready = false;

        // State
        this.state = {
            right: { pinch: 0, rotate: 0, fist: 0, present: false },
            left: { isOK: false, present: false }
        };

        // Smoothing buffers
        this._raw = {
            r_pinch: 0, r_rotate: 0, r_fist: 0
        };

        this.hands = new Hands({
            locateFile: (file) => {
                // Use specific version CDN with correct path structure
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults(this._process.bind(this));

        this.camera = new Camera(this.video, {
            onFrame: async () => {
                try {
                    await this.hands.send({ image: this.video });
                } catch (e) {
                    console.warn("Error sending frame to MediaPipe:", e);
                }
            },
            width: 640,
            height: 480 // Lower res sufficient for gesture
        });
    }

    async start() {
        try {
            // Check if we're in a secure context (HTTPS)
            if (!window.isSecureContext) {
                throw new Error("Camera requires HTTPS connection. Please use HTTPS.");
            }
            
            // Check if camera API is available
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error("Camera API not supported by your browser.");
            }
            
            await this.camera.start();
            this.ready = true;
            console.log("Camera Started");
        } catch (e) {
            console.error("Camera failed to start:", e);
            // Add more specific error messages for common issues
            if (e.name === 'NotAllowedError') {
                throw new Error("Camera access denied. Please allow camera permission in your browser settings.");
            } else if (e.name === 'NotFoundError') {
                throw new Error("No camera found. Please connect a camera device.");
            } else if (e.name === 'NotReadableError') {
                throw new Error("Camera is already in use by another application.");
            } else {
                throw e;
            }
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
