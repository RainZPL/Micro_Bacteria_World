
import * as THREE from 'three';

// --- Particle Shader (Center Fade) ---
const particleVertexShader = `
    attribute float size;
    attribute float alpha;
    varying float vAlpha;
    varying vec3 vWorldPosition;
    void main() {
        vAlpha = alpha;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const particleFragmentShader = `
    uniform vec3 color;
    uniform vec3 focusPoint; 
    varying float vAlpha;
    varying vec3 vWorldPosition;
    void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(length(coord) > 0.5) discard;
        float distToFocus = distance(vWorldPosition, focusPoint);
        float fade = smoothstep(0.5, 3.0, distToFocus); 
        float strength = 1.0 - length(coord) * 2.0;    
        gl_FragColor = vec4(color, vAlpha * fade * strength);
    }
`;

export class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x1a1a20, 0.05);

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.domElement = this.renderer.domElement;

        // Root holds everyone
        this.root = new THREE.Group();
        this.scene.add(this.root);

        // --- Nested Worlds Group ---
        this.worldA = new THREE.Group(); // Network
        this.worldB = new THREE.Group(); // Vein Interior
        this.worldC = new THREE.Group(); // Nano Cluster

        // Hierarchy? Or separate for easy fading?
        // Separate is easier for blending opacities. 
        // We simulate nesting by coordinates.
        this.root.add(this.worldA);
        this.root.add(this.worldB);
        this.root.add(this.worldC);

        this.time = 0;
        this.zoomDepth = 0.0;

        // State for C Physics
        this.stressPhysics = { currentScale: 1.0, velocity: 0.0 };

        // Define Targets in World Space (Approx)
        // A Target: Hero Vein center
        this.targets = {
            a: { pos: new THREE.Vector3(0, 0, -5), radius: 1.0 },
            b: { pos: new THREE.Vector3(0, 0, -2), radius: 0.5 } // Relative to B space
        };

        this._initLighting();
        this._initWorldA(); // Network
        this._initWorldB(); // Vein Interior
        this._initWorldC(); // Nano
        this._initAmbient(); // Global particles
    }

    _initLighting() {
        const ambient = new THREE.AmbientLight(0x444455, 1.5);
        this.scene.add(ambient);
        const main = new THREE.PointLight(0xaaddff, 1.5, 50);
        main.position.set(5, 5, 5);
        this.scene.add(main);
        const spot = new THREE.SpotLight(0x44ffaa, 3);
        spot.position.set(0, 10, 0);
        spot.lookAt(0, 0, 0);
        this.scene.add(spot);
    }

    _initWorldA() {
        // Slime Mold Network
        const matNormal = new THREE.MeshLambertMaterial({ color: 0x448866, transparent: true, opacity: 0.5 });
        const matHero = new THREE.MeshLambertMaterial({ color: 0x88ffaa, transparent: true, opacity: 0.8, emissive: 0x224433 });

        this.veinsA = [];

        // Hero Vein (Center Focus)
        // Straight-ish path down Z for "zoom into" feel
        const heroPath = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(0, 0, -5), // Target A area
            new THREE.Vector3(0.5, 0.5, -10)
        ]);
        const heroGeo = new THREE.TubeGeometry(heroPath, 30, 0.2, 8, false);
        const heroMesh = new THREE.Mesh(heroGeo, matHero);
        this.worldA.add(heroMesh);
        this.veinsA.push({ mesh: heroMesh, isHero: true });

        // Context Veins
        for (let i = 0; i < 15; i++) {
            const points = [];
            let pos = new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10);
            points.push(pos.clone());
            for (let j = 0; j < 4; j++) {
                pos.addRandom(3.0);
                points.push(pos.clone());
            }
            const curve = new THREE.CatmullRomCurve3(points);
            const tube = new THREE.TubeGeometry(curve, 10, 0.04, 4, false);
            const mesh = new THREE.Mesh(tube, matNormal);
            this.worldA.add(mesh);
            this.veinsA.push({ mesh, isHero: false });
        }
    }

    _initWorldB() {
        // Vein Interior (Tube)
        // Align with camera Z axis for "travel" feel
        const path = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 5),
            new THREE.Vector3(0, 0, -10)
        ]);
        const tubeGeo = new THREE.TubeGeometry(path, 40, 3.0, 16, false); // Wide tube needed to be "inside"
        const mat = new THREE.MeshPhysicalMaterial({
            color: 0x226644, side: THREE.BackSide, // Inside view
            transparent: true, opacity: 0.6, roughness: 0.4, transmission: 0.1
        });
        const tube = new THREE.Mesh(tubeGeo, mat);
        this.worldB.add(tube);

        // Flowing particles inside B
        this.bParticles = [];
        const pGeo = new THREE.SphereGeometry(0.05);
        const pMat = new THREE.MeshBasicMaterial({ color: 0xaaffcc });
        for (let i = 0; i < 80; i++) {
            const m = new THREE.Mesh(pGeo, pMat);
            m.position.set((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 10);
            this.worldB.add(m);
            this.bParticles.push({ mesh: m, speed: 0.05 + Math.random() * 0.05 });
        }

        // Spike Target (Transition to C)
        const coneGeo = new THREE.ConeGeometry(0.2, 1.0, 8);
        coneGeo.rotateX(Math.PI / 2); // Point along Z
        const spike = new THREE.Mesh(coneGeo, new THREE.MeshStandardMaterial({
            color: 0xffaa66, emissive: 0x442200
        }));
        spike.position.copy(this.targets.b.pos); // at -2 z
        this.worldB.add(spike);
    }

    _initWorldC() {
        // Nano Cluster
        const cellGeo = new THREE.SphereGeometry(0.5, 32, 32);
        const cellMat = new THREE.MeshPhysicalMaterial({ color: 0x446688, roughness: 0.5, metalness: 0.2 });
        this.c1 = new THREE.Mesh(cellGeo, cellMat);
        this.c2 = new THREE.Mesh(cellGeo, cellMat);
        this.c1.position.x = -0.4;
        this.c2.position.x = 0.4;

        const grooveGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.0, 16, 1, true);
        grooveGeo.rotateZ(Math.PI / 2);
        this.groove = new THREE.Mesh(grooveGeo, new THREE.MeshBasicMaterial({
            color: 0x66ffaa, transparent: true, opacity: 0.0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending
        }));

        this.worldC.add(this.c1);
        this.worldC.add(this.c2);
        this.worldC.add(this.groove);

        // Initial scale/pos
        this.worldC.scale.setScalar(0.5); // Micro
        this.worldC.position.z = -1.0; // In front camera
    }

    _initAmbient() {
        this.fakeFocus = { value: new THREE.Vector3(0, 0, -5) }; // Mock for shader

        // Far Dust (Existing logic)
        const dustCount = 1000;
        const dustGeo = new THREE.BufferGeometry();
        const positions = [];
        const sizes = [];
        const alphas = [];
        for (let i = 0; i < dustCount; i++) {
            positions.push((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40);
            sizes.push(0.5 + Math.random());
            alphas.push(0.3 + Math.random() * 0.5);
        }
        dustGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        dustGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        dustGeo.setAttribute('alpha', new THREE.Float32BufferAttribute(alphas, 1));

        const mat = new THREE.ShaderMaterial({
            uniforms: { color: { value: new THREE.Color(0x88aabb) }, focusPoint: this.fakeFocus },
            vertexShader: particleVertexShader,
            fragmentShader: particleFragmentShader,
            transparent: true, blending: THREE.NormalBlending, depthWrite: false
        });

        this.ambient = new THREE.Points(dustGeo, mat);
        this.scene.add(this.ambient); // Global
    }

    update(dt, state) {
        this.time += dt;
        this.zoomDepth = state.zoomDepth; // 0.0 to 1.0

        // --- 1. World Transitions (Blending based on depth) ---
        // A visible: 0.0 - 0.4 (Peak 0.0)
        // B visible: 0.3 - 0.8 (Peak 0.5)
        // C visible: 0.7 - 1.0 (Peak 1.0)

        // Opacity/Scale Logic

        // World A
        if (this.zoomDepth < 0.4) {
            this.worldA.visible = true;
            // Fade out as we go deeper
            const fade = 1.0 - Math.max(0, (this.zoomDepth - 0.25) / 0.15);
            this.worldA.scale.setScalar(1.0 + this.zoomDepth * 2.0); // Expand past camera
            // Hacky opacity on group? ThreeJS groups don't cascade opacity easily without traversing.
            // For now, assume slight pop is OK or traverse.
            this._setGroupOpacity(this.worldA, fade);
        } else {
            this.worldA.visible = false;
        }

        // World B
        if (this.zoomDepth > 0.25 && this.zoomDepth < 0.8) {
            this.worldB.visible = true;
            let fade = 1.0;
            if (this.zoomDepth < 0.35) fade = (this.zoomDepth - 0.25) / 0.1; // Fade In
            if (this.zoomDepth > 0.65) fade = 1.0 - (this.zoomDepth - 0.65) / 0.15; // Fade Out

            // "Travel" effect: B moves towards camera
            // Map depth 0.3->0.7 to Z travel
            const zOff = (this.zoomDepth - 0.3) * 10.0;
            this.worldB.position.z = zOff;

            this._setGroupOpacity(this.worldB, fade);
        } else {
            this.worldB.visible = false;
        }

        // World C
        if (this.zoomDepth > 0.65) {
            this.worldC.visible = true;
            let fade = 1.0;
            if (this.zoomDepth < 0.8) fade = (this.zoomDepth - 0.65) / 0.15;
            this._setGroupOpacity(this.worldC, fade);

            // C Physics (Stress)
            this._updateTaskC(state.inputs);
        } else {
            this.worldC.visible = false;
        }

        // --- 2. Animations ---
        // Pulse Hero Vein
        const pulse = 1.0 + Math.sin(this.time * 2.0) * 0.05;
        this.veinsA.forEach(v => {
            if (v.isHero) v.mesh.scale.setScalar(pulse);
        });

        // Flow B
        this.bParticles.forEach(p => {
            p.mesh.position.z += p.speed;
            if (p.mesh.position.z > 5) p.mesh.position.z = -5;
        });

        // Rotate Global slightly
        this.root.rotation.z = Math.sin(this.time * 0.1) * 0.05;

        // Render
        this.renderer.render(this.scene, this.camera);
    }

    _updateTaskC(inputs) {
        if (!inputs) return;
        const fist = inputs.fist || 0;
        let targetScale = 1.0;
        if (fist > 0.6) targetScale = 0.75;

        const k = 0.05, d = 0.90;
        const accel = (targetScale - this.stressPhysics.currentScale) * k;
        this.stressPhysics.velocity += accel;
        this.stressPhysics.velocity *= d;
        this.stressPhysics.currentScale += this.stressPhysics.velocity;

        const s = this.stressPhysics.currentScale;
        this.c1.position.x = -0.4 * s;
        this.c2.position.x = 0.4 * s;

        const stress = 1.0 - s;
        this.groove.material.opacity = stress > 0.1 ? (stress - 0.1) * 4 : 0;
    }

    _setGroupOpacity(group, alpha) {
        group.traverse(child => {
            if (child.isMesh && child.material) {
                child.material.opacity = alpha * 0.8; // Max 0.8
                child.material.transparent = true;
                child.visible = alpha > 0.01;
            }
        });
    }

    // Logic Checks for GameState
    getAlignmentA() {
        const camDir = new THREE.Vector3();
        this.camera.getWorldDirection(camDir);
        // Hero vein is at 0,0,-5.
        const targetDir = this.targets.a.pos.clone().sub(this.camera.position).normalize();
        return camDir.angleTo(targetDir) * (180 / Math.PI);
    }

    getAlignmentB() {
        // Target is spike in worldB space.
        // Need worldB position relative to camera.
        // WorldB moves with zoom.
        // Approx: 0,0,-2 relative to worldB origin.
        const spikeWorld = this.targets.b.pos.clone().add(this.worldB.position);
        const camDir = new THREE.Vector3();
        this.camera.getWorldDirection(camDir);
        const targetDir = spikeWorld.sub(this.camera.position).normalize();
        return camDir.angleTo(targetDir) * (180 / Math.PI);
    }

    checkTaskA() { return { angle: this.getAlignmentA(), zoomOk: true }; } // Legacy shim
    checkTaskB() { return { angle: this.getAlignmentB(), zoomOk: true }; }
}

THREE.Vector3.prototype.addRandom = function (scale) {
    this.x += (Math.random() - 0.5) * scale;
    this.y += (Math.random() - 0.5) * scale;
    this.z += (Math.random() - 0.5) * scale;
    return this;
};
