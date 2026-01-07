import { CONFIG } from '../core/config.js';

export class Gestures {
    constructor() {
        this.state = {
            rightHand: { pinch: 0, fist: 0, rotate: 0, active: false },
            leftHand: { isOK: false, active: false }
        };

        // Smoothing
        this.pinchQueue = [];
        this.rotateBase = null;
    }

    process(results) {
        this.state.rightHand.active = false;
        this.state.leftHand.active = false;
        this.state.leftHand.isOK = false;

        if (!results.multiHandLandmarks || !results.multiHandedness) return this.state;

        for (let i = 0; i < results.multiHandLandmarks.length; i++) {
            const landmarks = results.multiHandLandmarks[i];
            const handedness = results.multiHandedness[i].label; // "Left" or "Right"

            // Note: MediaPipe "Left" is usually user's Left in mirrored view? 
            // Or does proper mirroring swap it? 
            // Standard: "Right" label = User's Right hand.

            if (handedness === 'Right') {
                this._processRight(landmarks);
            } else if (handedness === 'Left') {
                this._processLeft(landmarks);
            }
        }

        return this.state;
    }

    _processRight(lm) {
        this.state.rightHand.active = true;
        const wrist = lm[0];
        const ref = this._dist(wrist, lm[5]); // Scale ref

        // 1. Pinch (Zoom)
        const pinchDist = this._dist(lm[4], lm[8]) / ref;
        // Map 0.2 (closed) -> 1.0, 0.5 (open) -> 0.0
        // Config: PINCH_THRESHOLD = 0.2
        let pinch = 0;
        if (pinchDist < 0.5) {
            pinch = 1.0 - (pinchDist - 0.1) / 0.4;
        }
        this.state.rightHand.pinch = Math.max(0, Math.min(1, pinch));

        // 2. Rotate (Wrist/Palm Roll)
        const p1 = lm[5]; // Index MCP
        const p2 = lm[17]; // Pinky MCP
        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

        if (this.rotateBase === null) this.rotateBase = angle;
        let da = angle - this.rotateBase;
        // Wrap
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        this.state.rightHand.rotate = da;

        // 3. Fist (Stress) - All fingers closed
        // Simple: average tip dist to wrist
        // Not critical for navigation, mapped to stress later
    }

    _processLeft(lm) {
        this.state.leftHand.active = true;
        const wrist = lm[0];
        const ref = this._dist(wrist, lm[5]);

        // OK Gesture
        // 1. Thumb + Index touching (Pinch)
        const pinchDist = this._dist(lm[4], lm[8]) / ref;
        const isPinch = pinchDist < CONFIG.HANDS.OK_PINCH_THRESH;

        // 2. Others Extended
        const mid = this._dist(lm[12], wrist) / ref;
        const ring = this._dist(lm[16], wrist) / ref;
        const pinky = this._dist(lm[20], wrist) / ref;
        const avgExt = (mid + ring + pinky) / 3;
        const isExtended = avgExt > CONFIG.HANDS.OK_EXTEND_THRESH; // > ~0.6 usually extended

        this.state.leftHand.isOK = isPinch && isExtended;
    }

    _dist(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
}
