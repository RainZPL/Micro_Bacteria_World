export function createOverlay(containerId) {
    const container = document.getElementById(containerId) || document.body;

    const layer = document.createElement('div');
    layer.style.cssText = "position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:10;";
    container.appendChild(layer);

    // Aiming Circle
    const circle = document.createElement('div');
    circle.style.cssText = `
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 60px; height: 60px;
        border: 2px solid rgba(255,255,255,0.3); border-radius: 50%;
        transition: all 0.2s;
    `;
    layer.appendChild(circle);

    // Instructions (Bottom Center)
    const instruct = document.createElement('div');
    instruct.style.cssText = `
        position: absolute; bottom: 80px; width: 100%; text-align: center;
        color: #888; font-family: 'Courier New', monospace; font-size: 14px;
        text-shadow: 0 1px 2px black;
    `;
    instruct.innerHTML = "Right Pin: Zoom | Left OK: Unlock";
    layer.appendChild(instruct);

    // Hold Ring (Center)
    const ring = document.createElement('div');
    ring.style.cssText = `
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 100px; height: 100px;
        border: 4px solid #44ffaa; border-radius: 50%; opacity: 0;
        transition: opacity 0.1s;
    `;
    layer.appendChild(ring);

    // Debug (Top Left)
    const debug = document.createElement('div');
    debug.style.cssText = `
        position: absolute; top: 10px; left: 10px; 
        color: #0f0; font-family: monospace; font-size: 11px;
        background: rgba(0,0,0,0.5); padding: 5px; display: none;
    `;
    layer.appendChild(debug);

    return { circle, instruct, ring, debug };
}
