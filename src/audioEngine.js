
export class AudioEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.isInitialized = false;

        // Oscillators
        this.l1Drone = null;
        this.l1Gain = null;
        this.lFO = null;
    }

    init() {
        if (this.isInitialized) return;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0.5;
        this.masterGain.connect(this.ctx.destination);

        // Drone (L1)
        this.l1Drone = this.ctx.createOscillator();
        this.l1Drone.type = 'sine';
        this.l1Drone.frequency.value = 60; // Low hum

        this.l1Gain = this.ctx.createGain();
        this.l1Gain.gain.value = 0.0;

        // LFO for modulation
        this.lFO = this.ctx.createOscillator();
        this.lFO.frequency.value = 0.5; // Hz
        this.lFO.connect(this.l1Gain.gain);

        this.l1Drone.connect(this.l1Gain);
        this.l1Gain.connect(this.masterGain);

        this.l1Drone.start();
        this.lFO.start();

        this.isInitialized = true;
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    update(stressLevel, flowSpeed) {
        if (!this.isInitialized) return;

        // Map stress to pitch/intensity
        const baseFreq = 60 + stressLevel * 100; // Pitch up on stress
        this.l1Drone.frequency.setTargetAtTime(baseFreq, this.ctx.currentTime, 0.1);

        // Map flow speed to LFO rate
        const lfoRate = 0.5 + flowSpeed * 5.0; // Faster wobble
        this.lFO.frequency.setTargetAtTime(lfoRate, this.ctx.currentTime, 0.1);

        // Volume
        this.l1Gain.gain.setTargetAtTime(0.3 + stressLevel * 0.4, this.ctx.currentTime, 0.1);
    }
}
