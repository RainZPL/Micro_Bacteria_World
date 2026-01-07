export const MATH = {
    clamp: (val, min, max) => Math.max(min, Math.min(max, val)),

    lerp: (a, b, t) => a + (b - a) * t,

    map: (val, inMin, inMax, outMin, outMax) => {
        return outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin);
    },

    // Smoothstep for 0-1
    smoothstep: (min, max, value) => {
        const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
        return x * x * (3 - 2 * x);
    },

    randFloat: (min, max) => min + Math.random() * (max - min),

    degToRad: (deg) => deg * (Math.PI / 180.0),

    // Simple pseudo-noise 1D
    noise: (x) => {
        return Math.sin(x) * 0.5 + Math.sin(x * 2.3) * 0.25 + Math.sin(x * 4.7) * 0.125;
    },

    // Shortest angle distance in radians

    // Shortest angle distance in radians
    angleDist: (a, b) => {
        let diff = b - a;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        return diff;
    }
};
