import * as Tone from 'tone';

export class AudioEngine {
    constructor() {
        this.ready = false;
        this.lfo = null;
        this.drone = null;
        this.initializing = false;
    }

    unlock() {
        try {
            const ctx = Tone.getContext();
            if (ctx.state !== 'running') {
                ctx.resume().catch(() => {});
            }
        } catch {
            // Ignore unlock errors; init will surface if needed.
        }
    }

    async init() {
        if (this.ready || this.initializing) return;
        this.initializing = true;
        try {
            this.unlock();
            await Tone.start();
            console.log('Audio Context Started');

            // Master Bus
            Tone.Destination.volume.value = -10; // Safe

            // Setup stubs
            this.drone = new Tone.Oscillator(50, "sine").toDestination().start();
            this.drone.volume.value = -20;

            // LFO for "Breathing"
            this.lfo = new Tone.LFO(0.5, -30, -10).connect(this.drone.volume).start();

            this.ready = true;
        } finally {
            this.initializing = false;
        }
    }

    update(dt, state) {
        if (!this.ready) return;
        // Stub mapping
        // flow -> LFO rate
        // fist -> modulation
    }
}
