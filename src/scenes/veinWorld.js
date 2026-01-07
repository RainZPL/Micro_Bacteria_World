import * as THREE from 'three';
import { CONFIG } from '../core/config.js';

export class VeinWorld {
    constructor() {
        this.group = new THREE.Group();
        this.targetSpikePos = new THREE.Vector3(0, -1.2, -4);
        this._build();
    }

    _build() {
        // 1. Organic Tube (Displaced)
        const path = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 5),
            new THREE.Vector3(0, 0, -20)
        ]);
        const tubeGeo = new THREE.TubeGeometry(path, 60, 3.5, 24, false); // Wide

        // Noise displacement
        const pos = tubeGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const z = pos.getZ(i);
            const noise = Math.sin(x * 0.5) * Math.sin(z * 0.3) * 0.2;
            pos.setXYZ(i, x + noise, y + noise, z);
        }
        tubeGeo.computeVertexNormals();

        const tubeMat = new THREE.MeshStandardMaterial({
            color: CONFIG.COLORS.veinInterior, side: THREE.BackSide,
            roughness: 0.7, metalness: 0.1
        });
        this.tunnel = new THREE.Mesh(tubeGeo, tubeMat);
        this.group.add(this.tunnel);

        // 2. Spikes (Aspergillus)
        const spikeGeo = new THREE.ConeGeometry(0.2, 1.2, 16);
        spikeGeo.translate(0, 0.6, 0); // Base at 0
        const spikeMat = new THREE.MeshStandardMaterial({
            color: CONFIG.COLORS.spike, emissive: 0xaa4400, roughness: 0.5
        });

        // Target Spike (On floor)
        this.targetSpike = new THREE.Mesh(spikeGeo, spikeMat);
        this.targetSpike.position.copy(this.targetSpikePos);
        // Align to "surface normal" (Approx Y up for floor)
        // Floor is negative Y, so normal is +Y.
        // Cone defaults +Y.
        this.targetSpike.rotation.x = -Math.PI / 6; // Tilt slightly inward
        this.group.add(this.targetSpike);

        // Decorative Spikes
        for (let i = 0; i < 12; i++) {
            const m = new THREE.Mesh(spikeGeo, spikeMat);
            const z = -Math.random() * 15 + 2;
            const angle = Math.random() * Math.PI * 2;
            const r = 3.2; // Wall radius approx

            // Position on circle wall
            m.position.set(Math.cos(angle) * r, Math.sin(angle) * r, z);

            // Orient: Look at center (0,0,z), then rotate -90 X to point cone tip IN? 
            // Cone points +Y. We want tip to point to center.
            // Vector from pos to center: -pos.
            // LookAt makes Z axis point to target.
            // We need Y axis point to target. Quaternions...
            // Simple hack: LookAt center, then rotate X -90.
            m.lookAt(0, 0, z);
            m.rotateX(-Math.PI / 2);

            this.group.add(m);
        }

        // Particles
        const pGeo = new THREE.BufferGeometry();
        const pPos = [];
        for (let i = 0; i < 100; i++) {
            pPos.push((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 20 - 5);
        }
        pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
        this.particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
            color: CONFIG.COLORS.veinFlow, size: 0.05, transparent: true
        }));
        this.group.add(this.particles);
    }

    update(dt, time) {
        // Flow
        const pos = this.particles.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            let z = pos.getZ(i);
            z += dt * 5.0; // Fast flow
            if (z > 5) z = -15;
            pos.setZ(i, z);
        }
        pos.needsUpdate = true;
    }
}
