import * as THREE from 'three';

const SLIME_VERT = `
varying vec2 vUv;
varying vec3 vNormal;
uniform float time;
void main() {
    vUv = uv;
    vNormal = normal;
    float pulse = sin(time * 2.0 + position.x * 0.5) * 0.05;
    vec3 p = position + normal * pulse;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

const SLIME_FRAG = `
varying vec2 vUv;
varying vec3 vNormal;
uniform float time;
uniform vec3 colorBase;
uniform vec3 colorFlow;
void main() {
    float flow = sin((vUv.x * 10.0) - (time * 3.0));
    flow = smoothstep(0.3, 0.7, flow);
    float pulse = 0.5 + 0.5 * sin(time * 2.5);
    vec3 finalColor = mix(colorBase, colorFlow, flow * 0.8);
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    finalColor += colorFlow * rim * 0.5;
    gl_FragColor = vec4(finalColor * (0.5 + pulse * 0.5), 1.0);
}
`;

export class WorldA_Slime {
    constructor() {
        this.group = new THREE.Group();
        this.heroTarget = new THREE.Vector3(0, 0, 0);

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                colorBase: { value: new THREE.Color(0x224422) },
                colorFlow: { value: new THREE.Color(0xddff00) }
            },
            vertexShader: SLIME_VERT,
            fragmentShader: SLIME_FRAG,
            transparent: true
        });

        // Generate Soft Circle Texture to remove squares
        const canvas = document.createElement('canvas');
        canvas.width = 32; canvas.height = 32;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
        const tex = new THREE.CanvasTexture(canvas);

        this.fanMat = new THREE.PointsMaterial({
            color: 0xffff00, size: 0.2, transparent: true, opacity: 0.9,
            map: tex, depthWrite: false, blending: THREE.AdditiveBlending
        });

        this.dustMat = new THREE.PointsMaterial({
            color: 0x448844, size: 0.15, transparent: true, opacity: 0.3,
            map: tex, depthWrite: false, blending: THREE.AdditiveBlending
        });

        this._generateNetwork();
        this._addDust();
    }

    getHeroTarget() {
        return this.heroTarget;
    }

    _generateNetwork() {
        const spawnBranch = (pos, dir, depth, width) => {
            if (depth <= 0) {
                this._addTerminalFan(pos);
                return;
            }

            const pts = [pos.clone()];
            let current = pos.clone();
            const segmentCount = 4 + Math.floor(Math.random() * 3);
            const segmentLen = (1.5 + Math.random()) * (width * 5.0);

            for (let i = 0; i < segmentCount; i++) {
                const wiggle = new THREE.Vector3(
                    (Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)
                ).multiplyScalar(0.5 * width);

                const step = dir.clone().multiplyScalar(segmentLen / segmentCount).add(wiggle);
                current.add(step);
                pts.push(current.clone());
            }

            const curve = new THREE.CatmullRomCurve3(pts);
            const tube = new THREE.TubeGeometry(curve, 8, width, 6, false);
            const mesh = new THREE.Mesh(tube, this.material);
            this.group.add(mesh);

            const count = 2 + Math.floor(Math.random() * 2);
            for (let b = 0; b < count; b++) {
                const angleSpread = 1.5;
                const newDir = dir.clone().applyEuler(new THREE.Euler(
                    (Math.random() - 0.5) * angleSpread,
                    (Math.random() - 0.5) * angleSpread,
                    (Math.random() - 0.5) * angleSpread
                )).normalize();
                spawnBranch(current, newDir, depth - 1, width * 0.7);
            }
        };

        spawnBranch(new THREE.Vector3(0, -5, 0), new THREE.Vector3(0, 1, 0), 5, 0.5);
        spawnBranch(new THREE.Vector3(-4, -3, 0), new THREE.Vector3(1, 1, 0.2), 5, 0.4);
        spawnBranch(new THREE.Vector3(4, -3, -1), new THREE.Vector3(-1, 1, -0.1), 5, 0.4);
    }

    _addTerminalFan(pos) {
        // Track Highest Tip
        if (pos.y > this.heroTarget.y) {
            this.heroTarget.copy(pos);
        }

        const count = 20;
        const pts = [];
        for (let i = 0; i < count; i++) {
            pts.push(
                pos.x + (Math.random() - 0.5) * 1.5,
                pos.y + (Math.random() - 0.5) * 1.5,
                pos.z + (Math.random() - 0.5) * 1.5
            );
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
        const ptsMesh = new THREE.Points(geo, this.fanMat);
        this.group.add(ptsMesh);
    }

    _addDust() {
        const geo = new THREE.BufferGeometry();
        const pos = [];
        for (let i = 0; i < 800; i++) {
            pos.push((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 30);
        }
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        this.group.add(new THREE.Points(geo, this.dustMat));
    }

    checkTarget(zoom) {
        if (zoom > 4.5) return { inside: true };
        return { inside: false };
    }

    update(dt, zoom) {
        this.material.uniforms.time.value += dt;
    }
}
