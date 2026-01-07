import * as THREE from 'three';

// Vein Wall Shader (Organic, Bumpy, Moist)
const VEIN_VERT = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPos;
uniform float time;

void main() {
    vUv = uv;
    vNormal = normal;
    vPos = position;
    
    // Peristalsis (slow rhythmic compression)
    float wave = sin(position.z * 0.2 + time * 1.5) * 0.5;
    vec3 p = position + normal * wave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

const VEIN_FRAG = `
varying vec2 vUv;
varying vec3 vNormal;
uniform float time;
uniform vec3 colorBase; // Dark Red/Purple
uniform vec3 colorRidge; // Lighter Pink

void main() {
    // Noise-like texture
    float n = sin(vUv.x * 20.0) * sin(vUv.y * 20.0 + time);
    
    vec3 color = mix(colorBase, colorRidge, n * 0.3 + 0.3);
    
    // Fresnel Rim (wetness)
    vec3 viewDir = normalize(cameraPosition - vPos); // Approx logic in ES2
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 3.0);
    
    gl_FragColor = vec4(color + vec3(0.1, 0.1, 0.2) * fresnel, 1.0);
}
`;

export class WorldB_Aspergillus {
    constructor() {
        this.group = new THREE.Group();
        this.visible = false;

        // 1. Vein Tunnel
        // Long cylinder, inverted normals? Or double sided.
        const geo = new THREE.CylinderGeometry(4, 4, 100, 32, 20, true);
        geo.rotateX(Math.PI / 2); // Align Z
        geo.scale(-1, 1, 1); // Point normals inward

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                colorBase: { value: new THREE.Color(0x330011) }, // Dark blood
                colorRidge: { value: new THREE.Color(0x662233) }
            },
            vertexShader: VEIN_VERT,
            fragmentShader: VEIN_FRAG,
            side: THREE.BackSide
        });

        this.tunnel = new THREE.Mesh(geo, this.material);
        this.group.add(this.tunnel);

        // 2. Aspergillus Spores (Spiky Spheres)
        this._addSpores();
    }

    _addSpores() {
        // Instanced Mesh for performance
        const count = 50;
        const sphereGeo = new THREE.IcosahedronGeometry(0.3, 1);
        const sphereMat = new THREE.MeshStandardMaterial({
            color: 0x88aa88, roughness: 0.8, emissive: 0x112211
        });

        this.spores = new THREE.InstancedMesh(sphereGeo, sphereMat, count);

        const dummy = new THREE.Object3D();
        for (let i = 0; i < count; i++) {
            // Place along inner wall
            const angle = Math.random() * Math.PI * 2;
            const r = 3.5; // Slightly inside wall radius 4
            const z = (Math.random() - 0.5) * 80; // Spread along length

            dummy.position.set(
                Math.cos(angle) * r,
                Math.sin(angle) * r,
                z
            );

            // Random rotation
            dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);

            const scale = 0.5 + Math.random() * 1.5;
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();
            this.spores.setMatrixAt(i, dummy.matrix);
        }

        this.group.add(this.spores);
    }

    setVisible(visible) {
        this.group.visible = visible;
        this.visible = visible;
    }

    update(dt, zoom) {
        if (!this.visible) return;
        this.material.uniforms.time.value += dt;

        // Optional: Rotate spores or float them?
    }

    // Check if user has navigated to a "Target Spore"
    // For now, simpler: Just "Deep Enough" in the tunnel.
    checkTarget(cameraZ) {
        // Tunnel extends -50 to 50.
        // If cameraZ is deep inside.
        return { inside: true };
    }
}
