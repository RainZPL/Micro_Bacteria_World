export const GestureLogic = {
    distance: (a, b) => Math.hypot(a.x - b.x, a.y - b.y),

    // 1. Pinch (Norm 0..1)
    // Ref: Distance between Thumb Tip (4) and Index Tip (8)
    // Scale: Normalize by wrist (0) to Index MCP (5)
    calculatePinch: (lm) => {
        const ref = GestureLogic.distance(lm[0], lm[5]);
        const dist = GestureLogic.distance(lm[4], lm[8]);
        const open = ref * 1.2;
        const closed = ref * 0.1;
        // Map: small dist -> 1.0 (strong pinch), large dist -> 0.0
        let val = 1.0 - (dist - closed) / (open - closed);
        return Math.max(0, Math.min(1, val));
    },

    // 2. Rotate (Radians)
    // Wrist (0) -> Index MCP (5) vector direction for Yaw/Roll approx
    calculateRotation: (lm) => {
        const p1 = lm[0];
        const p2 = lm[5];
        return Math.atan2(p2.y - p1.y, p2.x - p1.x); // Simple 2D rotation
    },

    // 3. Fist (Norm 0..1)
    // Tips (8, 12, 16, 20) dist to Wrist (0)
    calculateFist: (lm) => {
        const ref = GestureLogic.distance(lm[0], lm[5]);
        const tips = [8, 12, 16, 20];
        let total = 0;
        tips.forEach(idx => {
            total += GestureLogic.distance(lm[idx], lm[0]);
        });
        const avg = total / 4;

        // Open hand tips are far (~1.5-2.0 ref). Closed are close (~0.5-0.8 ref).
        const open = ref * 1.8;
        const closed = ref * 0.8;

        // Map: small dist -> 1.0 (Fist), large -> 0.0
        let val = 1.0 - (avg - closed) / (open - closed);
        return Math.max(0, Math.min(1, val));
    },

    // 4. OK Gesture (Boolean)
    // Thumb(4) touches Index(8) AND Middle(12), Ring(16), Pinky(20) are extended
    detectOK: (lm) => {
        const ref = GestureLogic.distance(lm[0], lm[5]);

        // A. Circle Check (Thumb-Index Pinch)
        const pinchDist = GestureLogic.distance(lm[4], lm[8]);
        const isCircle = pinchDist < (ref * 0.3); // Loose pinch is fine

        // B. Extension Check (Others far from wrist)
        const tips = [12, 16, 20];
        let extendedCount = 0;
        tips.forEach(idx => {
            if (GestureLogic.distance(lm[idx], lm[0]) > ref * 1.3) extendedCount++;
        });

        return isCircle && (extendedCount >= 2); // Allow one loose finger
    }
};
