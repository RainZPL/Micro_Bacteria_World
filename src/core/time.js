export class Time {
    constructor() {
        this.start = performance.now();
        this.current = this.start;
        this.dt = 0;
        this.elapsed = 0;
        this.frames = 0;
    }

    tick() {
        const now = performance.now();
        this.dt = (now - this.current) / 1000;
        this.current = now;
        this.elapsed = (now - this.start) / 1000;
        this.frames++;

        // Cap dt to prevent huge jumps on tab switch
        if (this.dt > 0.1) this.dt = 0.1;
    }
}
