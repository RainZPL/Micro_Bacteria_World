export const CONFIG = {
    // Visuals
    COLORS: {
        background: 0x020205, // Deep Organic Dark
        fog: 0x020205,
        // Fluorescent Palettes
        networkBase: 0x224422,
        networkHero: 0xccff00, // Bio-Yellow/Green
        veinInterior: 0x112211,
        spike: 0xffaa00,
        nanoCell: 0x0088aa,
        nanoGroove: 0x44ffcc
    },
    FOG_DENSITY: 0.15, // Heavy Atmosphere (Microscope)

    // Zoom / Depth (Continuous)
    ZOOM: {
        MIN: 1.0,
        MAX: 4.5,
        RANGE_A: [1.0, 2.2], // Network -> Single Vein
        RANGE_B: [2.2, 3.5], // Vein -> Spike
        RANGE_C: [3.5, 4.5], // Spike -> Nano
        SPEED: 0.6
    },

    // Interaction
    HANDS: {
        MAX_NUM: 2,
        PINCH_THRESH: 0.4, // Map < 0.4 to Zoom In
        OK_PINCH: 0.2,     // Strict OK pinch
        OK_EXTEND: 0.55    // Fingers out
    },

    TASK: {
        HOLD_TIME: 3.0,
        HOLD_GRACE: 0.25,
        ANGLE_TOL_A: 15.0,
        ANGLE_TOL_B: 20.0, // Easier inside vein
    },

    // Animation Timings (ms)
    ANIM: {
        STRESS_DELAY: 150,
        STRESS_CONTRACT: 300,
        STRESS_OVERSHOOT: 120,
        STRESS_REBOUND: 300,
        PULSE_RATE_A: 0.5, // Hz
        PULSE_RATE_A_HIGH: 1.2 // Hz (Dense Zone)
    }
};
