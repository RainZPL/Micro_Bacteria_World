import * as THREE from 'three';
import { CONFIG } from '../core/config.js';
import { MATH } from '../core/math.js';
import { SlimeWorld } from '../scenes/slimeWorld.js';
import { VeinWorld } from '../scenes/veinWorld.js';
import { SpikeWorld } from '../scenes/spikeWorld.js';
import { AmbientFX } from '../fx/ambient.js';

export class SceneManager {
    constructor(renderer) {
        this.scene = renderer.scene;
        this.camera = renderer.camera;

        this.root = new THREE.Group();
        this.scene.add(this.root);

        this.worldA = new SlimeWorld();
        this.worldB = new VeinWorld();
        this.worldC = new SpikeWorld();

        this.root.add(this.worldA.group);
        this.root.add(this.worldB.group);
        this.root.add(this.worldC.group);

        this.ambient = new AmbientFX(this.scene);

        this.time = 0;
    }

    update(dt, zoom, input) {
        this.time += dt;

        // 1. Scene Root Rotation (Right Hand)
        if (input.rightHand.rotation !== undefined) {
            // Dampen input
            const targetY = input.rightHand.rotate; // -PI to PI
            // Current is accumulated? Or absolute? 
            // Input system gave absolute angle of hand roll.
            // Map hand roll to scene roll? 
            // Design: "Rotate wrist -> scene root rotation"
            // Let's Lerp.
            const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, targetY * 0.5));
            this.root.rotation.z = MATH.lerp(this.root.rotation.z, targetY, dt * 2);
        }

        this.ambient.update(dt);
        this.worldA.update(dt, this.time);
        this.worldB.update(dt, this.time);
        // C needs hold progress, handled by GameState? Or passed in. 
        // For now leave C static unless holding.

        // 2. Microscope Zoom Logic
        // Z Travel Effect:
        // Zoom 1 -> Camera Z=0? No, Camera statics at origin?
        // Let's move the WORLD towards camera.
        // A is at 0. B is behind A? 
        // Better: Objects move closer.

        // Logic:
        // A visible: [1.0, 2.5]. Opacity fade 2.0->2.5
        // B visible: [1.8, 3.5]. Opacity fade 1.8->2.2 (in), 3.0->3.5 (out)
        // C visible: [3.0, 4.0]. Opacity fade 3.0->3.4 (in).

        // World A
        if (zoom < 2.5) {
            this.worldA.group.visible = true;
            // Scale up to pass camera
            const s = zoom;
            this.worldA.group.scale.setScalar(s);
            // Fade
            let alpha = 1.0;
            if (zoom > 2.0) alpha = 1.0 - (zoom - 2.0) / 0.5;
            this._setOpacity(this.worldA.group, alpha);
        } else {
            this.worldA.group.visible = false;
        }

        // World B
        if (zoom > 1.8 && zoom < 3.5) {
            this.worldB.group.visible = true;
            let alpha = 1.0;
            if (zoom < 2.2) alpha = (zoom - 1.8) / 0.4;
            if (zoom > 3.0) alpha = 1.0 - (zoom - 3.0) / 0.5;
            this._setOpacity(this.worldB.group, alpha);

            // Move: Starts far, comes close
            // At zoom 2, z = -10. At zoom 3, z = 0.
            const z = -10 + (zoom - 2.0) * 10.0;
            this.worldB.group.position.z = z;
        } else {
            this.worldB.group.visible = false;
        }

        // World C
        if (zoom > 3.0) {
            this.worldC.group.visible = true;
            let alpha = 1.0;
            if (zoom < 3.4) alpha = (zoom - 3.0) / 0.4;
            this._setOpacity(this.worldC.group, alpha);

            this.worldC.group.position.z = -5 + (zoom - 3.0) * 5.0;
        } else {
            this.worldC.group.visible = false;
        }
    }

    _setOpacity(group, val) {
        group.traverse(o => {
            if (o.material) {
                o.material.opacity = val * (o.userData.baseAlpha || 0.8);
                o.material.transparent = true;
                o.visible = val > 0.01;
            }
        });
    }

    // Task Alignment
    getAlignments() {
        const camDir = new THREE.Vector3();
        this.camera.getWorldDirection(camDir);

        // A
        const dirA = this.worldA.heroPos.clone().sub(this.camera.position).normalize();
        const angA = camDir.angleTo(dirA) * (180 / Math.PI);

        // B
        // Need world position of target spike
        const worldSpike = this.worldB.targetSpikePos.clone();
        worldSpike.applyMatrix4(this.worldB.group.matrixWorld);
        const dirB = worldSpike.sub(this.camera.position).normalize();
        const angB = camDir.angleTo(dirB) * (180 / Math.PI);

        return { angleA: angA, angleB: angB };
    }
}
