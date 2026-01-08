import { UI } from './ui/ui.js';
import { WorldManager } from './world/worldManager.js';
import { AudioEngine } from './audio/audioEngine.js';
import { HandTracker } from './handTracker.js';

// Global Error Handler for deployment debugging
// Global Error Handler for deployment debugging
window.onerror = function (msg, url, line, col, error) {
    const errorMsg = `Error: ${msg}\nLine: ${line}`;
    const hint = document.getElementById('task-hint');
    const title = document.getElementById('task-title');
    if (hint) hint.textContent = errorMsg;
    if (title) title.textContent = "CRASHED";
    console.error("Global Error:", error);
    return false;
};

class App {
    constructor() {
        try {
            this.ui = new UI();
            this.audio = new AudioEngine();
            this.world = new WorldManager(document.getElementById('canvas-container'));
            this.world.setUI(this.ui);
            this.tracker = new HandTracker(document.getElementById('video-element'));
            this.started = false;
            this.starting = false;


            // Unlock Audio & Start Camera
            // Initial Prompt
            this.ui.updateTask("READY", "Click or tap to enable Camera & Audio");

            // Unlock Audio & Start Camera
            const startExperience = async () => {
                if (this.started || this.starting) return;
                this.starting = true;
                this.ui.updateTask("INITIALIZING", "Requesting camera permission...");

                try {
                    let audioWarning = null;
                    if (!this.audio.ready) {
                        try {
                            await this.audio.init();
                        } catch (err) {
                            audioWarning = err instanceof Error ? err.message : String(err);
                        }
                    }

                    await this.tracker.start();
                    const hint = audioWarning
                        ? `Use gestures to interact (audio blocked: ${audioWarning})`
                        : "Use gestures to interact";
                    this.ui.updateTask("EXPLORE", hint);
                    this.started = true;
                } catch (err) {
                    const message = err instanceof Error ? err.message : String(err);
                    this.ui.updateTask("ERROR", message + " (click to retry)");
                    this.starting = false;
                }
            };

            ['pointerdown', 'click'].forEach((eventName) => {
                document.body.addEventListener(eventName, startExperience);
            });

            window.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    startExperience();
                }
            });

            this.lastTime = performance.now();
            this.loop();
        } catch (e) {
            console.error("Init Error:", e);
            if (this.ui) this.ui.updateTask("CRASHED", "Init Error: " + e.message);
        }
    }

    loop() {
        requestAnimationFrame(this.loop.bind(this));

        const now = performance.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        // Get Inputs
        const inputs = this.tracker.getInput();

        this.world.update(dt, inputs);

        // Debug Information
        if (inputs.right.present || inputs.left.present) {
            const debugInfo = {
                FPS: (1 / dt).toFixed(0),
                "R Pinch": inputs.right.pinch.toFixed(2),
                "R Fist": inputs.right.fist.toFixed(2),
                "R Rot": inputs.right.rotate.toFixed(2),
                "L OK": inputs.left.isOK
            };
            this.ui.updateDebug(debugInfo);
        }

        // Visual feedback for OK
        if (inputs.left.isOK) {
            this.ui.setReticleActive(true, false);
        } else {
            this.ui.setReticleActive(false, false);
        }
    }
}

new App();
