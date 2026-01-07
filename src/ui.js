
export class UI {
    constructor() {
        this.container = document.getElementById('ui-layer') || document.body; // Fallback to body
        if (!document.getElementById('ui-layer')) {
            // If we fallback, create it to ensure styling works
            this.container.id = 'ui-layer';
            document.body.appendChild(this.container);
        }
        this.setupBaseUI();
    }

    setupBaseUI() {
        // Aiming Circle
        this.aimingCircle = document.createElement('div');
        this.aimingCircle.id = 'aiming-circle';
        this.container.appendChild(this.aimingCircle);

        // Progress Bar
        this.progressContainer = document.createElement('div');
        this.progressContainer.id = 'progress-container';
        this.progressBar = document.createElement('div');
        this.progressBar.id = 'progress-bar';
        this.progressContainer.appendChild(this.progressBar);
        this.container.appendChild(this.progressContainer);

        // Task Info
        this.taskInfo = document.createElement('div');
        this.taskInfo.id = 'task-info';
        this.container.appendChild(this.taskInfo);

        // Debug Panel
        this.debugPanel = document.createElement('div');
        this.debugPanel.id = 'debug-panel';
        this.container.appendChild(this.debugPanel);

        // Hold Ring (Dynamic)
        this.holdRing = document.createElement('div');
        this.holdRing.style.cssText = `
             position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
             width: 120px; height: 120px;
             border: 6px solid #444; border-radius: 50%;
             pointer-events: none; opacity: 0; transition: opacity 0.2s;
             box-shadow: 0 0 15px rgba(0,255,100,0.3);
        `;
        this.container.appendChild(this.holdRing);

        // Onboarding Instructions (2-Hand)
        this.instructions = document.createElement('div');
        this.instructions.style.cssText = `
            position: absolute; bottom: 80px; left: 50%; transform: translateX(-50%);
            color: #aaa; font-family: monospace; text-align: center; font-size: 14px;
            background: rgba(0,0,0,0.5); padding: 10px; border-radius: 8px;
            pointer-events: none;
        `;
        this.instructions.innerHTML = `
            <div><b>Right Hand:</b> Pinch to Zoom | Rotate Scene | Fist Stress</div>
            <div><b>Left Hand:</b> OK Gesture to Confirm/Unlock</div>
        `;
        this.container.appendChild(this.instructions);
    }

    updateTaskInfo(message) {
        if (this.taskInfo) this.taskInfo.innerText = message;
    }

    updateProgress(percent) {
        if (this.progressBar) this.progressBar.style.width = `${percent}%`;
    }

    setAimingStatus(status) {
        // status: 'normal', 'aligned', 'locked'
        if (status === 'aligned') {
            this.aimingCircle.style.borderColor = '#44ffaa';
            this.aimingCircle.style.boxShadow = '0 0 15px #44ffaa';
        } else if (status === 'locked') {
            this.aimingCircle.style.borderColor = '#ffff00';
            this.aimingCircle.style.boxShadow = '0 0 15px #ffff00';
        } else {
            this.aimingCircle.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            this.aimingCircle.style.boxShadow = 'none';
        }
    }

    updateDebugInfo(info) {
        if (!this.debugPanel) return;
        // info: { zoom, fist, rotate, fps, zoomDepth, stage, isOK, holdTimer, maxDepth }

        const stageName = ['Network (A)', 'Vein (B)', 'Nano (C)'][info.stage] || 'Unknown';

        this.debugPanel.innerHTML = `
            <div style="margin-bottom:5px;"><b>DEBUG MODE</b></div>
            <div>FPS: ${info.fps}</div>
            <hr style="border-color:#444">
            <div><b>State: ${stageName}</b></div>
            <div>Zoom Depth: ${(info.zoomDepth * 100).toFixed(0)}% (Max: ${(info.maxDepth * 100).toFixed(0)}%)</div>
            <hr style="border-color:#444">
            <div><b>Hand 1 (Nav)</b></div>
            <div>Pinch: ${info.pinch.toFixed(2)}</div>
            <div>Fist: ${info.fist.toFixed(2)}</div>
            <hr style="border-color:#444">
            <div><b>Hand 2 (Interact)</b></div>
            <div>Status: <span style="color:${info.isOK ? '#0f0' : '#888'}">${info.isOK ? 'OK GESTURE' : 'Waiting...'}</span></div>
            <div>Hold: ${info.holdTimer.toFixed(1)}s / 3.0s</div>
        `;
    }

    showHoldProgress(ratio) {
        if (ratio > 0.1) {
            this.holdRing.style.opacity = 1;
            // Color interpolation? Grey -> Green
            const g = Math.floor(ratio * 255);
            this.holdRing.style.borderColor = `rgb(0, ${g}, 100)`;
            this.holdRing.style.transform = `translate(-50%, -50%) scale(${1.0 - ratio * 0.2})`; // Shrink effect?
        } else {
            this.holdRing.style.opacity = 0;
        }
    }
}
