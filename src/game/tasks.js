import { CONFIG } from '../core/config.js';

export class TaskManager {
    constructor(gameState) {
        this.state = gameState;
    }

    update(dt, input, alignments) {
        // alignments: { angleA, angleB } from SceneManager
        const Phase = this.state.phase;

        let conditionMet = false;

        // --- Check Conditions ---
        if (Phase === 'A' && !this.state.completedA) {
            // Task A: Align to 0,0,-5 (< 12deg) + OK
            // Must be "deep enough" in A to confirm? Say > 1.5
            if (this.state.zoom > 1.5 && Math.abs(alignments.angleA) < CONFIG.TASK.ANGLE_TOLERANCE_A) {
                conditionMet = true;
            }
        } else if (Phase === 'B' && !this.state.completedB) {
            // Task B: Align to Spike (< 15deg) + OK
            if (this.state.zoom > 2.5 && Math.abs(alignments.angleB) < CONFIG.TASK.ANGLE_TOLERANCE_B) {
                conditionMet = true;
            }
        } else if (Phase === 'C') {
            // Task C: Just hold OK to actuate stress?
            // "Task C (OK hold triggers stress timeline + hold 3s)"
            conditionMet = true; // Always valid to interact
        }

        // --- Process Hold ---
        const isOK = input.leftHand.isOK;

        if (conditionMet && isOK) {
            this.state.holdTimer += dt;
            this.state.holdGrace = CONFIG.TASK.HOLD_GRACE;

            // Check Completion
            if (this.state.holdTimer >= CONFIG.TASK.HOLD_TIME) {
                if (Phase === 'A') this.state.unlockPhaseB();
                if (Phase === 'B') this.state.unlockPhaseC();
                // C handles stress logic elsewhere, flags maybe?
            }
        } else {
            // Grace Period Logic
            if (this.state.holdGrace > 0) {
                this.state.holdGrace -= dt;
            } else {
                this.state.holdTimer = 0;
            }
        }
    }

    getHoldProgress() {
        return Math.min(1.0, this.state.holdTimer / CONFIG.TASK.HOLD_TIME);
    }
}
