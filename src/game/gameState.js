import { CONFIG } from '../core/config.js';
import { MATH } from '../core/math.js';

export class GameState {
    constructor() {
        this.zoom = CONFIG.ZOOM.MIN;
        this.targetZoom = CONFIG.ZOOM.MIN;

        // Progress Gating
        this.maxUnlockedZoom = CONFIG.ZOOM.RANGE_A[1]; // Initially capped at end of A

        this.phase = 'A'; // A, B, C

        // Completion Flags
        this.completedA = false;
        this.completedB = false;

        // Hold Logic
        this.holdTimer = 0;
        this.holdGrace = 0;
    }

    update(dt, input) {
        // --- 1. Zoom Control (Right Hand Pinch) ---
        // Pinch > 0.5 = Zoom In, Pinch < 0.2 = Zoom Out ? 
        // Or cleaner: Pinch maps to Velocity.
        // Let's use: Pinch 0.8+ (Strong Pinch) = Advance. Open Palm = Retreat?
        // Actually Design says "Pinch makes network collapse (Zoom In)".

        if (input.rightHand.active) {
            const p = input.rightHand.pinch;
            const speed = CONFIG.ZOOM.SPEED * dt * 2.0;

            if (p > 0.8) {
                this.targetZoom += speed;
            } else if (p < 0.3) {
                this.targetZoom -= speed;
            }
        }

        // Clamp Target to Unlocked Range
        this.targetZoom = MATH.clamp(this.targetZoom, CONFIG.ZOOM.MIN, this.maxUnlockedZoom);

        // Smooth Zoom
        this.zoom = MATH.lerp(this.zoom, this.targetZoom, dt * 5.0);

        // --- 2. Phase Determination ---
        if (this.zoom < CONFIG.ZOOM.RANGE_A[1]) this.phase = 'A';
        else if (this.zoom < CONFIG.ZOOM.RANGE_B[1]) this.phase = 'B';
        else this.phase = 'C';
    }

    unlockPhaseB() {
        if (this.completedA) return;
        this.completedA = true;
        this.maxUnlockedZoom = CONFIG.ZOOM.RANGE_B[1];
        console.log("Phase B Unlocked");
    }

    unlockPhaseC() {
        if (this.completedB) return;
        this.completedB = true;
        this.maxUnlockedZoom = CONFIG.ZOOM.MAX;
        console.log("Phase C Unlocked");
    }
}
