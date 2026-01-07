import * as THREE from 'three';
import { CONFIG } from '../core/config.js';
import { MATH } from '../core/math.js';

export class SpikeWorld {
    constructor() {
        this.group = new THREE.Group();
        this._build();

        // Animation State
        this.animState = 'IDLE'; // IDLE, DELAY, CONTRACT, OVERSHOOT, REBOUND
        this.timer = 0;
        this.currentScale = 1.0;
        this.baseScale = 1.0;
        this.targetLow = 0.7; // Compressed
        this.targetHigh = 1.1; // Overshoot
    }

    _build() {
        // Nano Cells (Instanced for efficiency if many, but here just a cluster)
        const cellGeo = new THREE.IcosahedronGeometry(0.5, 2);
        const cellMat = new THREE.MeshStandardMaterial({
            color: CONFIG.COLORS.nanoCell, roughness: 0.3, metalness: 0.4
        });

        this.cells = new THREE.Group();
        // Central Cluster
        this.c1 = new THREE.Mesh(cellGeo, cellMat); this.c1.position.x = -0.45;
        this.c2 = new THREE.Mesh(cellGeo, cellMat); this.c2.position.x = 0.45;
        this.cells.add(this.c1);
        this.cells.add(this.c2);

        // Division Groove (Cylinder glowing)
        this.groove = new THREE.Mesh(
            new THREE.CylinderGeometry(0.48, 0.48, 1.0, 32, 1, true),
            new THREE.MeshBasicMaterial({
                color: CONFIG.COLORS.nanoGroove,
                blending: THREE.AdditiveBlending,
                transparent: true, opacity: 0.2,
                side: THREE.DoubleSide
            })
        );
        this.groove.rotation.z = Math.PI / 2;
        this.cells.add(this.groove);

        this.group.add(this.cells);
        this.group.scale.setScalar(0.5);
        this.group.position.z = -2; // In front
    }

    update(dt, inputFist) {
        // Input Logic: Fist > 0.5 Triggers Animation Sequence (if IDLE)
        if (inputFist > 0.5 && this.animState === 'IDLE') {
            this.animState = 'DELAY';
            this.timer = 0;
            console.log("Stress Anim Start");
        }

        // State Machine
        this.timer += dt * 1000; // ms

        if (this.animState === 'DELAY') {
            if (this.timer >= CONFIG.ANIM.STRESS_DELAY) {
                this.animState = 'CONTRACT';
                this.timer = 0;
            }
        } else if (this.animState === 'CONTRACT') {
            const t = Math.min(1, this.timer / CONFIG.ANIM.STRESS_CONTRACT);
            this.currentScale = MATH.lerp(1.0, this.targetLow, MATH.smoothstep(0, 1, t));

            // Groove brightens
            this.groove.material.opacity = 0.2 + t * 0.8;

            if (t >= 1) {
                this.animState = 'OVERSHOOT';
                this.timer = 0;
            }
        } else if (this.animState === 'OVERSHOOT') {
            const t = Math.min(1, this.timer / CONFIG.ANIM.STRESS_OVERSHOOT);
            this.currentScale = MATH.lerp(this.targetLow, this.targetHigh, t); // Fast expansion

            if (t >= 1) {
                this.animState = 'REBOUND';
                this.timer = 0;
            }
        } else if (this.animState === 'REBOUND') {
            const t = Math.min(1, this.timer / CONFIG.ANIM.STRESS_REBOUND);
            // Elastic bounce?
            const k = Math.exp(-t * 5) * Math.cos(t * 10); // Damp spring
            this.currentScale = 1.0 + (this.targetHigh - 1.0) * k;

            this.groove.material.opacity = 0.2 + (1.0 - t) * 0.5;

            if (t >= 1) {
                this.animState = 'IDLE';
                this.currentScale = 1.0;
            }
        }

        // Apply Scale
        const s = this.currentScale;
        this.c1.position.x = -0.45 * s;
        this.c2.position.x = 0.45 * s;
        this.groove.scale.set(1, s, 1);

        // Jitter during stress
        if (this.animState !== 'IDLE') {
            this.group.position.x = (Math.random() - 0.5) * 0.02;
            this.group.position.y = (Math.random() - 0.5) * 0.02;
        } else {
            this.group.position.x = 0;
            this.group.position.y = 0;
        }
    }
}
