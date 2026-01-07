export class UI {
    constructor() {
        this.title = document.getElementById('task-title');
        this.hint = document.getElementById('task-hint');
        this.reticle = document.getElementById('aiming-reticle');
        this.progress = document.getElementById('progress-circle');
        this.debug = document.getElementById('debug-overlay');

        this.progressLength = 283; // 2 * PI * 45
    }

    updateTask(title, hint) {
        this.title.textContent = title;
        this.hint.textContent = hint;
    }

    setReticleActive(isActive, isLocked) {
        if (isLocked) {
            this.reticle.style.borderColor = '#4f8'; // Complete
            this.reticle.style.borderStyle = 'solid';
            this.reticle.style.boxShadow = '0 0 15px #4f8';
        } else if (isActive) {
            this.reticle.style.borderColor = '#fd4'; // Ready to hold
            this.reticle.style.borderStyle = 'solid';
        } else {
            this.reticle.style.borderColor = 'rgba(255,255,255,0.3)'; // Idle
            this.reticle.style.borderStyle = 'dashed';
            this.reticle.style.boxShadow = 'none';
        }
    }

    updateProgress(percent) {
        const offset = this.progressLength * (1 - percent);
        this.progress.style.strokeDashoffset = offset;
    }

    updateDebug(info) {
        if (!info) {
            this.debug.style.display = 'none';
            return;
        }
        this.debug.style.display = 'block';
        this.debug.innerHTML = Object.entries(info).map(([k, v]) => `${k}: ${v}`).join('<br>');
    }
}
