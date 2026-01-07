import * as THREE from 'three';

const DUST_VERT = `
attribute float size;
varying float vAlpha;
void main() {
    vAlpha = 0.5 + Math.sin(position.x)*0.2; // slight var
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
}
`;

const DUST_FRAG = `
uniform vec3 color;
void main() {
    float r = distance(gl_PointCoord, vec2(0.5));
    if(r > 0.5) discard;
    gl_FragColor = vec4(color, 0.4 * (1.0 - r*2.0));
}
`;

export class AmbientFX {
    constructor(scene) {
        this.group = new THREE.Group();
        scene.add(this.group);

        this._initDust();
        this._initBlobs();
    }

    _initDust() {
        // Layer 1: Far Dust (Background)
        const count = 1000;
        const pos = [];
        const sizes = [];
        for (let i = 0; i < count; i++) {
            pos.push((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 40 - 10);
            sizes.push(0.5 + Math.random());
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        geo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0x88aabb) }
            },
            vertexShader: DUST_VERT,
            fragmentShader: DUST_FRAG,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.dust = new THREE.Points(geo, mat);
        this.group.add(this.dust);
    }

    _initBlobs() {
        // Layer 2: Soft Bokeh (Foreground/Mid)
        const count = 50;
        const pos = [];
        for (let i = 0; i < count; i++) {
            pos.push((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));

        // Use soft sprite
        const mat = new THREE.PointsMaterial({
            color: 0xaaddcc, size: 2.0, transparent: true, opacity: 0.05,
            blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
        });

        this.blobs = new THREE.Points(geo, mat);
        this.group.add(this.blobs);
    }

    update(dt) {
        this.dust.rotation.y += 0.05 * dt;
        this.blobs.rotation.y += 0.02 * dt;
    }
}
