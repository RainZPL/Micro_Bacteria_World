
export class GameState {
    constructor() {
        this.state = 'INIT'; // INIT, EXPLORE, VTT, RESULT

        // Explore State Data
        this.explore = {
            zoomDepth: 0.0,    // 0.0 to 1.0
            maxDepth: 0.35,     // Gated depth (Start at A)
            stage: 0,          // 0=A, 1=B, 2=C

            // Task Completion Flags
            taskAComplete: false,
            taskBComplete: false,

            // Hold Logic
            holdTimer: 0,
            holdGrace: 0,
            requiredHoldTime: 3.0
        };

        this.vtt = {
            active: false
        };

        this.callbacks = {
            onStageUnlock: null,
            onComplete: null
        };
    }

    startGame() {
        this.state = 'EXPLORE';
        this.explore.zoomDepth = 0.0;
        this.explore.maxDepth = 0.35; // Locked to World A initially
        this.explore.stage = 0;
    }

    update(dt, inputs) {
        if (this.state === 'EXPLORE') {
            this._updateExplore(dt, inputs);
        }
    }

    _updateExplore(dt, inputs) {
        const { pinch, navActive, angleA, angleB, isOK } = inputs;

        // 1. Map Pinch to ZoomDepth
        // Pinch 0..1 -> ZoomDelta
        // We act like a "throttle" or direct map? 
        // User wants "Pinch zoom makes network collapse".
        // Let's accumulate zoom based on pinch (Zoom In) vs open (Zoom Out)?
        // OR Direct Mapping: Pinch(1.0) = Zoom In, Pinch(0.0) = Zoom Out.
        // Direct mapping gives better control for microscope feel.

        // However, pinch is standard "closedness". 
        // Let's say: 
        // Pinch > 0.8 => Move Forward (Zoom In)
        // Pinch < 0.2 => Move Backward (Zoom Out)
        // Neutral => Stay

        const speed = 0.3 * dt;
        if (navActive) {
            if (pinch > 0.7) {
                this.explore.zoomDepth += speed * (pinch - 0.7) * 3.0;
            } else if (pinch < 0.3) {
                this.explore.zoomDepth -= speed * (0.3 - pinch) * 3.0;
            }
        }

        // Clamp to allowed range
        if (this.explore.zoomDepth < 0) this.explore.zoomDepth = 0;
        if (this.explore.zoomDepth > this.explore.maxDepth) this.explore.zoomDepth = this.explore.maxDepth;

        // 2. Logic Check (Completion)
        // Check A
        if (this.explore.stage === 0) {
            // Task A range: 0.2 - 0.35
            // High Density Zone check
            if (this.explore.zoomDepth > 0.20 && this.explore.zoomDepth < 0.36) {
                if (Math.abs(angleA) < 8.0 && isOK) {
                    this._processHold(dt);
                } else {
                    this._resetHold(dt);
                }

                if (this.explore.holdTimer >= this.explore.requiredHoldTime) {
                    this._completeStageA();
                }
            } else {
                this._resetHold(dt);
            }
        }

        // Check B
        if (this.explore.stage === 1) {
            // Task B Range: 0.5 - 0.70
            if (this.explore.zoomDepth > 0.5 && this.explore.zoomDepth < 0.71) {
                if (Math.abs(angleB) < 12.0 && isOK) { // Larger/easier angle for B
                    this._processHold(dt);
                } else {
                    this._resetHold(dt);
                }

                if (this.explore.holdTimer >= this.explore.requiredHoldTime) {
                    this._completeStageB();
                }
            } else {
                this._resetHold(dt);
            }
        }

        // Check C (Just interaction, maybe VTT trigger)
        if (this.explore.stage === 2) {
            if (this.explore.zoomDepth > 0.95) {
                // Trigger VTT eventually? Or separate button?
                // For now, let them explore.
            }
        }
    }

    _processHold(dt) {
        this.explore.holdTimer += dt;
        this.explore.holdGrace = 0.25;
    }

    _resetHold(dt) {
        if (this.explore.holdGrace > 0) {
            this.explore.holdGrace -= dt;
        } else {
            this.explore.holdTimer = 0;
        }
    }

    _completeStageA() {
        if (this.explore.taskAComplete) return;
        this.explore.taskAComplete = true;
        this.explore.stage = 1;
        this.explore.maxDepth = 0.7; // Unlock B
        this.explore.holdTimer = 0;
        console.log("Stage A Complete! Unlocking B.");
        if (this.callbacks.onStageUnlock) this.callbacks.onStageUnlock('A');
    }

    _completeStageB() {
        if (this.explore.taskBComplete) return;
        this.explore.taskBComplete = true;
        this.explore.stage = 2;
        this.explore.maxDepth = 1.0; // Unlock C
        this.explore.holdTimer = 0;
        console.log("Stage B Complete! Unlocking C.");
        if (this.callbacks.onStageUnlock) this.callbacks.onStageUnlock('B');
    }

    startVTT() {
        this.state = 'VTT';
    }
}
