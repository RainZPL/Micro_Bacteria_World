import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export class PostProcessor {
    constructor(renderer, scene, camera) {
        this.renderer = renderer;
        this.composer = new EffectComposer(renderer);
        this.composer.addPass(new RenderPass(scene, camera));

        // Organic Bloom (Bio-Bioluminescence)
        // Params: resolution, strength, radius, threshold
        this.bloom = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5, 0.8, 0.15
        );
        this.composer.addPass(this.bloom);

        // Note: FilmGrain or Vignette can be added here or via CSS integration
    }

    setSize(width, height) {
        this.composer.setSize(width, height);
        this.bloom.resolution.set(width, height);
    }

    render() {
        this.composer.render();
    }
}
