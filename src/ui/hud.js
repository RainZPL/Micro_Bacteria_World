import { createOverlay } from './overlay.js';

export class HUD {
    constructor() {
        this.elements = createOverlay('ui-layer');
    }

    update(progress, isAligned, isOK, debugInfo) {
        // Aiming Circle
        if (isAligned) {
            this.elements.circle.style.borderColor = isOK ? '#44ffaa' : '#ffff00';
            this.elements.circle.style.boxShadow = isOK ? '0 0 10px #44ffaa' : '0 0 5px #ffff00';
            this.elements.circle.style.borderWidth = '4px';
        } else {
            this.elements.circle.style.borderColor = 'rgba(255,255,255,0.3)';
            this.elements.circle.style.boxShadow = 'none';
            this.elements.circle.style.borderWidth = '2px';
        }

        // Hold Ring
        if (progress > 0.05) {
            this.elements.ring.style.opacity = 1;
            const s = 1.0 - progress * 0.4;
            this.elements.ring.style.transform = `translate(-50%, -50%) scale(${s})`;
        } else {
            this.elements.ring.style.opacity = 0;
        }

        // Debug
        if (debugInfo) {
            this.elements.debug.style.display = 'block';
            this.elements.debug.innerHTML = `
                Zoom: ${debugInfo.zoom.toFixed(2)}<br>
                Phase: ${debugInfo.phase}<br>
                AngA: ${debugInfo.angA.toFixed(1)}<br>
                AngB: ${debugInfo.angB.toFixed(1)}<br>
                L_OK: ${isOK}<br>
                R_Pin: ${debugInfo.pinch.toFixed(2)}
            `;
        } else {
            this.elements.debug.style.display = 'none';
        }
    }
}
