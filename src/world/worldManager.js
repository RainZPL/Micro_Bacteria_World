import * as THREE from 'three';
import { PostProcessor } from '../render/post.js';
import { WorldA_Slime } from './worldA_slime.js';
import { WorldB_Aspergillus } from './worldB_aspergilius.js';

export class WorldManager {
    constructor(container) {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x050510, 0.05);

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(0, 0, 12);

        this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        container.appendChild(this.renderer.domElement);

        this.post = new PostProcessor(this.renderer, this.scene, this.camera);

        // Worlds
        this.worldA = new WorldA_Slime();
        this.worldB = new WorldB_Aspergillus();
        this.worldB.setVisible(false);

        this.groupRoot = new THREE.Group();
        this.scene.add(this.groupRoot);
        this.groupRoot.add(this.worldA.group);
        this.scene.add(this.worldB.group);

        // Continuous Zoom State
        this.zoom = 1.0;
        this.targetZoom = 1.0;

        // Task Progress Flags
        this.tasks = {
            A_complete: false,
            B_complete: false
        };
        this.taskTimer = 0.0;
        this.ui = null;

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.post.setSize(window.innerWidth, window.innerHeight);
        });

        const ambient = new THREE.AmbientLight(0x222222);
        this.scene.add(ambient);
        const dir = new THREE.DirectionalLight(0xffffff, 0.5);
        this.scene.add(dir);
    }

    setUI(ui) { this.ui = ui; }

    update(dt, inputs) {
        // --- 1. Navigation (Continuous Zoom) ---
        if (inputs.right && inputs.right.present) {
            const p = inputs.right.pinch;
            const zoomSpeed = 5.0;

            // Zoom Logic
            if (p > 0.6) this.targetZoom += dt * zoomSpeed * (p - 0.5);
            if (p < 0.4) this.targetZoom -= dt * zoomSpeed * (0.5 - p);

            this.groupRoot.rotation.z += (inputs.right.rotate - this.groupRoot.rotation.z) * 0.1;
        }

        // --- PROGRESSION LOCK ---
        // If A is not complete, prevent zooming past 9.8 (into B)
        if (!this.tasks.A_complete) {
            if (this.targetZoom > 9.8) {
                this.targetZoom = 9.8; // Hard Stop
                // Optional: Feedback handled in Logic block
            }
        }

        // Clamp Global Zoom Range (1.0 -> 30.0)
        this.targetZoom = Math.max(1.0, Math.min(30.0, this.targetZoom));
        this.zoom += (this.targetZoom - this.zoom) * 0.1;


        // --- 2. Phase Switching Logic ---
        const PHASE_THRESHOLD = 9.9;

        if (this.zoom < PHASE_THRESHOLD) {
            // === WORLD A ACTIVE ===
            this.worldA.group.visible = true;
            this.worldB.setVisible(false);

            // Camera Logic A
            const t = (this.zoom - 1.0) / 9.0;
            this.camera.position.z = 12.0 * (1.0 - t * 0.95);

            // Pivot A Logic
            if (this.worldA.getHeroTarget) {
                const tipLocal = this.worldA.getHeroTarget();
                const shiftT = Math.max(0, Math.min(1, (this.zoom - 1.2) / 6.0));
                const targetPos = tipLocal.clone().multiplyScalar(-1.0 * shiftT);
                this.worldA.group.position.lerp(targetPos, 0.1);
            }

            // Render Updates
            this.worldA.update(dt, this.zoom);
            this.scene.fog.density = 0.05;

            // --- UI & TASK LOGIC A ---
            if (!this.tasks.A_complete) {
                // Not Done yet
                const check = this.worldA.checkTarget(this.zoom);

                if (check.inside) {
                    // 1. Check for OK Gesture (Scanning Priority)
                    if (inputs.left && inputs.left.isOK) {
                        this.taskTimer += dt;
                        this.ui?.updateTask("OBSERVING...", "Scanning Tip Structure");
                        this.ui?.setReticleActive(true, true);
                    } else {
                        // 2. Not Scanning. Check if hitting wall.
                        this.taskTimer = Math.max(0, this.taskTimer - dt * 2);

                        if (Math.abs(this.targetZoom - 9.8) < 0.1) {
                            this.ui?.updateTask("ACCESS DENIED", "Analyze Tip First (Hold OK)");
                        } else {
                            this.ui?.updateTask("TARGET ACQUIRED", "Hold OK to Analyze");
                        }
                        this.ui?.setReticleActive(true, false);
                    }
                    this.ui?.updateProgress(Math.min(1, this.taskTimer / 3.0));

                    if (this.taskTimer > 3.0) {
                        this.tasks.A_complete = true;
                        this.taskTimer = 0;
                        this.targetZoom = 12.0; // Auto-push into B upon completion
                    }
                } else {
                    this.ui?.updateTask("TASK A", "Zoom to Tip");
                    this.ui?.setReticleActive(false, false);
                    this.ui?.updateProgress(0);
                }
            } else {
                // Done (Persistent State)
                this.ui?.updateTask("ACCESS GRANTED", "Zoom In to Enter Vein");
                this.ui?.updateProgress(1.0); // Show full ring as "Key"
                this.ui?.setReticleActive(true, true);
            }

        } else {
            // === WORLD B ACTIVE ===
            this.worldA.group.visible = false;
            this.worldB.setVisible(true);

            // Camera Logic B
            const bP = (this.zoom - 10.0) / 20.0;
            this.camera.position.z = 50.0 - (bP * 100.0);

            // Visuals
            this.worldB.update(dt, this.zoom);
            this.scene.fog.density = 0.02;

            // --- UI & TASK LOGIC B ---
            if (!this.tasks.B_complete) {
                this.ui?.updateTask("TASK B: VEIN", "Find Spores (Deep inside)");

                if (bP > 0.5) {
                    if (inputs.left && inputs.left.isOK) {
                        this.taskTimer += dt;
                        this.ui?.updateTask("SPORE CLUSTER", "Sampling...");
                        this.ui?.setReticleActive(true, true);
                    } else {
                        this.taskTimer = Math.max(0, this.taskTimer - dt * 2);
                        this.ui?.updateTask("SPORE ALERT", "Hold OK to Sample");
                        this.ui?.setReticleActive(true, false);
                    }
                    this.ui?.updateProgress(Math.min(1, this.taskTimer / 3.0));

                    if (this.taskTimer > 3.0) {
                        this.tasks.B_complete = true;
                        this.taskTimer = 0;
                    }
                } else {
                    this.taskTimer = 0;
                    this.ui?.updateProgress(0);
                    this.ui?.setReticleActive(false, false); // Reset reticle here
                }
            } else {
                this.ui?.updateTask("TASK B COMPLETE", "Explore...");
                this.ui?.setReticleActive(true, true);
                this.ui?.updateProgress(1.0);
            }
        }

        this.post.render();
    }
}
