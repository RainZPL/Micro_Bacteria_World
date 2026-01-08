# Micro Gesture Exploration

A hand-gesture controlled microscopic exploration game.

## Requirements
- Node.js (v16+)
- Webcam
- Modern Browser (Chrome recommended)

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open the Local URL shown in terminal (e.g., `http://localhost:5173`).

3. **Build for Production**
   ```bash
   npm run build
   ```
   The static site will be in `dist/`.

## Deployment (Vercel)

1. Import the repo on Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`

Notes:
- Camera access requires HTTPS or localhost.
- If you embed the page in an iframe, the parent must allow camera permissions.

## How to Play

### Controls
Use your hand in front of the camera:
- **Pinch (Thumb & Index)**: Zoom In/Out.
    - Open Hand = Zoom Out (Macro)
    - Closed Pinch = Zoom In (Micro)
- **Rotate (Wrist/Hand Orientation)**: Rotates the scene found.
- **Fist (Clench entire hand)**: Triggers "Stress" response in L3.

### Tasks
- **Task A (Macro)**: Find the hidden **Dense Zone** (follow the circle hints). Hold for 3s.
- **Task B (Micro)**: Find the **Spike Spot** on the spore surface. Hold for 3s.
- **Task C (Nano)**: Enter **Stress Mode**.
    - Zoom max (>= 3.5)
    - Rotate hand (accumulate delta)
    - Clench Fist (>= 75%)
    - Hold for 3s.
- **VTT**: Answer the visual questions.

## Debugging
- If the HUD says "HAND LOST", check camera or lighting.
- The **yellow/green circle** guides you to the target.
