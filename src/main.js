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


            // Unlock Audio & Start Camera
            // Initial Prompt
            this.ui.updateTask("READY", "Click anywhere to enable Camera & Audio");

            // Unlock Audio & Start Camera
            document.body.addEventListener('click', () => {
                this.ui.updateTask("INITIALIZING", "Starting Camera...");
                if (!this.audio.ready) this.audio.init();
                this.tracker.start()
                    .then(() => this.ui.updateTask("EXPLORE", "Use gestures to interact"))
                    .catch(err => this.ui.updateTask("ERROR", "Camera failed: " + err.message));
            }, { once: true });

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
