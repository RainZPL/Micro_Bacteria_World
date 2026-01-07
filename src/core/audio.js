export class AudioSystem {
    constructor() {
        // Stubs until interaction
        this.ctx = null;
        this.isActive = false;

        // Nodes
        this.drone = null;
        this.lfo = null;
        this.gain = null;
        this.fm = null;
    }

    init() {
        if (this.isActive) return;
        const AC = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.4; // Safe volume
        this.master.connect(this.ctx.destination);

        // 1. L1 Breath Drone
        this.drone = this.ctx.createOscillator();
        this.drone.type = 'sine';
        this.drone.frequency.value = 50;

        this.lfo = this.ctx.createOscillator();
        this.lfo.frequency.value = 0.2; // Breath rate

        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = 200; // Mod depth

        this.lfo.connect(lfoGain);
        lfoGain.connect(this.drone.frequency); // FM

        this.gain = this.ctx.createGain();
        this.gain.gain.value = 0.0;

        this.drone.connect(this.gain);
        this.gain.connect(this.master);

        // 2. Stress FM (Phase C)
        this.fm = this.ctx.createOscillator();
        this.fm.frequency.value = 200;
        this.fmGain = this.ctx.createGain();
        this.fmGain.gain.value = 0.0;
        this.fm.connect(this.fmGain);
        this.fmGain.connect(this.master);

        this.drone.start();
        this.lfo.start();
        this.fm.start();

        this.isActive = true;
    }

    update(phase, zoom, fist) {
        if (!this.isActive) return;

        const time = this.ctx.currentTime;

        if (phase === 'A') {
            // Breathing
            this.gain.gain.setTargetAtTime(0.5, time, 0.1);
            this.fmGain.gain.setTargetAtTime(0, time, 0.1);
            this.lfo.frequency.value = 0.2 + (zoom - 1.0) * 0.2; // Faster as zoom in
        } else if (phase === 'B') {
            // Tense
            this.gain.gain.setTargetAtTime(0.3, time, 0.1);
            this.drone.frequency.setTargetAtTime(80, time, 0.5);
        } else if (phase === 'C') {
            // Stress
            this.gain.gain.setTargetAtTime(0.1, time, 0.1);
            let stressVol = fist * 0.8;
            this.fmGain.gain.setTargetAtTime(stressVol, time, 0.05);
            this.fm.frequency.value = 200 + fist * 400; // Pitch up
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    }
}
