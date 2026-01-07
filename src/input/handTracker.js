import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import { Gestures } from './gestures.js';

export class HandTracker {
    constructor(videoElement) {
        this.videoElement = videoElement;
        this.processor = new Gestures();
        this.currentInput = this.processor.state;

        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults(this._onResults.bind(this));

        this.camera = new Camera(this.videoElement, {
            onFrame: async () => {
                await this.hands.send({ image: this.videoElement });
            },
            width: 1280,
            height: 720
        });
    }

    start() {
        this.camera.start();
    }

    _onResults(results) {
        // Parse raw landmarks into clean input state
        this.currentInput = this.processor.process(results);
    }

    getInput() {
        return this.currentInput; // Returns { rightHand:..., leftHand:... }
    }
}
