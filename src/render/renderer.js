import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CONFIG } from '../core/config.js';

export class Renderer {
    constructor(container) {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(CONFIG.COLORS.fog, CONFIG.FOG_DENSITY);

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);

        this.webgl = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
        this.webgl.setSize(window.innerWidth, window.innerHeight);
        this.webgl.setClearColor(0x000000, 0);
        this.webgl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit for performance w/ Bloom

        container.appendChild(this.webgl.domElement);

        // --- Lighting ---
        const ambient = new THREE.AmbientLight(0x222233, 1.0);
        this.scene.add(ambient);

        // Rim Light
        const rim = new THREE.SpotLight(0x88ccff, 2.0);
        rim.position.set(-5, 5, -10);
        rim.lookAt(0, 0, 0);
        this.scene.add(rim);

        // Key Light
        const key = new THREE.PointLight(0xffaa55, 1.0, 20);
        key.position.set(5, 2, 5);
        this.scene.add(key);

        // --- Post Processing ---
        this.composer = new EffectComposer(this.webgl);

        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        // Organic Glow (Bloom)
        // Strength, Radius, Threshold
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.5, 0.2);
        this.composer.addPass(bloomPass);

        window.addEventListener('resize', this._onResize.bind(this));
    }

    _onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.webgl.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        // this.webgl.render(this.scene, this.camera);
        this.composer.render(); // Use composer
    }
}
