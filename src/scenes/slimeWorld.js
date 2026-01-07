import * as THREE from 'three';
import { CONFIG } from '../core/config.js';
import { MATH } from '../core/math.js';

export class SlimeWorld {
    constructor() {
        this.group = new THREE.Group();
        this.heroPos = new THREE.Vector3(0, 0, -5);
        this._build();
    }

    _build() {
        // Texture for Flow
        const cvs = document.createElement('canvas');
        cvs.width = 128; cvs.height = 32;
        const ctx = cvs.getContext('2d');
        const grd = ctx.createLinearGradient(0, 0, 128, 0);
        grd.addColorStop(0, '#000000');
        grd.addColorStop(0.5, '#ffffff');
        grd.addColorStop(1, '#000000');
        ctx.fillStyle = grd; ctx.fillRect(0, 0, 128, 32);

        this.flowTex = new THREE.CanvasTexture(cvs);
        this.flowTex.wrapS = THREE.RepeatWrapping;

        // Hero Vein
        const heroPath = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-1.5, -2, 3),
            new THREE.Vector3(0, 0, -5), // Target
            new THREE.Vector3(2, 3, -15)
        ]);

        const heroGeo = new THREE.TubeGeometry(heroPath, 64, 0.25, 12, false); // Thicker
        this.heroMat = new THREE.MeshStandardMaterial({
            color: CONFIG.COLORS.networkHero,
            emissive: CONFIG.COLORS.networkHero, emissiveIntensity: 0.5,
            map: this.flowTex, transparent: true, opacity: 0.9,
            side: THREE.FrontSide
        });

        this.heroMesh = new THREE.Mesh(heroGeo, this.heroMat);
        this.group.add(this.heroMesh);

        // 2. Branching Network
        this.veins = [];
        const matBase = new THREE.MeshStandardMaterial({
            color: CONFIG.COLORS.networkBase,
            emissive: CONFIG.COLORS.networkBase, emissiveIntensity: 0.2, // Glow
            roughness: 0.4,
            transparent: true, opacity: 0.6
        });

        // recursive generator
        const spawnBranch = (startPos, depth, count) => {
            if (depth <= 0) return;

            for (let i = 0; i < count; i++) {
                const pts = [startPos.clone()];
                let pos = startPos.clone();
                // Random Direction per branch
                const dir = new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5) * 0.5 - 0.5).normalize();

                // Segments
                const len = 3 + Math.random() * 5;
                for (let k = 0; k < 5; k++) {
                    pos.add(dir.clone().multiplyScalar(len / 5));
                    // Noise
                    pos.x += (Math.random() - 0.5);
                    pos.y += (Math.random() - 0.5);
                    pos.z += (Math.random() - 0.5);
                    pts.push(pos.clone());
                }

                const curve = new THREE.CatmullRomCurve3(pts);
                const radius = 0.02 + depth * 0.04; // Thicker at root
                const tube = new THREE.TubeGeometry(curve, 16, radius, 6, false);
                const mesh = new THREE.Mesh(tube, matBase);
                this.group.add(mesh);
                this.veins.push(mesh);

                // Recursion
                if (Math.random() > 0.4) {
                    spawnBranch(pos, depth - 1, Math.floor(Math.random() * 2) + 1);
                }
            }
        };

        // Start a few roots
        spawnBranch(new THREE.Vector3(-5, -5, 0), 3, 3);
        spawnBranch(new THREE.Vector3(5, 5, -5), 3, 3);
        spawnBranch(new THREE.Vector3(-5, 5, -10), 3, 3);
        spawnBranch(new THREE.Vector3(2, -2, -2), 2, 4); // Near hero

        // 3. High Density Particles
        const denseGeo = new THREE.BufferGeometry();
        const dPos = [];
        for (let i = 0; i < 300; i++) {
            // Cluster around hero start
            dPos.push((Math.random() - 0.5) * 6 - 1.5, (Math.random() - 0.5) * 6 - 2, (Math.random() - 0.5) * 6 + 3);
        }
        denseGeo.setAttribute('position', new THREE.Float32BufferAttribute(dPos, 3));
        const denseMat = new THREE.PointsMaterial({
            color: CONFIG.COLORS.networkHero, size: 0.1, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
        });
        this.group.add(new THREE.Points(denseGeo, denseMat));
    }

    update(dt, time) {
        // Pulse Hero
        const rate = CONFIG.ANIM.PULSE_RATE_A_HIGH;
        const pulse = 0.5 + Math.sin(time * rate * Math.PI * 2) * 0.2;
        this.heroMat.emissiveIntensity = pulse + 0.2;
        this.heroMat.map.offset.x -= dt * 0.2; // Flow

        // Subtle move context
        this.veins.forEach((v, i) => {
            v.rotation.x = Math.sin(time * 0.5 + i) * 0.02;
        });
    }
}
