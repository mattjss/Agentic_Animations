/**
 * Pixel animation patterns for agent loading states
 * Each pattern: (x, y, t) => opacity (0-1)
 * x, y: grid coordinates (0-7 in 8x8 grid), t: frame counter
 */

export type PixelPattern = (x: number, y: number, t: number) => number

const ON = 0.9
const GRID = 8

// 1. Breathe - Single dot pulsing in center
export const breathePattern: PixelPattern = (x, y, t) => {
  if (x !== 3 || y !== 3) return 0
  const v = (Math.sin(t * 0.08) + 1) / 2
  return v * ON
}

// 2. Orbit - Dot rotating around center
export const orbitPattern: PixelPattern = (x, y, t) => {
  const cx = 3.5
  const cy = 3.5
  const angle = t * 0.1
  const r = 2
  const px = Math.round(cx + Math.cos(angle) * r)
  const py = Math.round(cy + Math.sin(angle) * r)
  if (x === px && y === py) return ON
  return 0
}

// 3. Pulse - Center dot with cardinal dots pulsing outward
export const pulsePattern: PixelPattern = (x, y, t) => {
  const cx = 3
  const cy = 3
  if (x === cx && y === cy) return ON
  const frame = Math.floor(t / 6) % 3
  const r = frame + 1
  const isCardinal =
    (x === cx && Math.abs(y - cy) === r) ||
    (y === cy && Math.abs(x - cx) === r)
  return isCardinal ? ON : 0
}

// 4. Rain - Three columns of falling dots
export const rainPattern: PixelPattern = (x, y, t) => {
  const cols = [2, 4, 6]
  const speeds = [0.2, 0.15, 0.18]
  const offsets = [0, 4, 9]
  
  for (let i = 0; i < cols.length; i++) {
    if (x !== cols[i]) continue
    const pos = Math.floor(t * speeds[i] + offsets[i]) % GRID
    if (y === pos) return ON
    if (y === (pos - 1 + GRID) % GRID) return 0.3
  }
  return 0
}

// 5. Echo - Dot moving horizontally with trailing copies
export const echoPattern: PixelPattern = (x, y, t) => {
  if (y !== 3) return 0
  const head = Math.floor(t * 0.4) % (GRID + 4)
  const mainX = head - 2
  if (x === mainX) return ON
  
  // Trailing copies
  for (let i = 1; i <= 3; i++) {
    const trailX = mainX - i
    if (x === trailX) {
      const opacity = [0.6, 0.35, 0.15][i - 1]
      return opacity * (1 - (head / (GRID + 4)))
    }
  }
  return 0
}

// 6. Ripple - Expanding concentric rings
export const ripplePattern: PixelPattern = (x, y, t) => {
  const cx = 3.5
  const cy = 3.5
  const dx = x - cx
  const dy = y - cy
  const dist = Math.sqrt(dx * dx + dy * dy)
  
  const rings = [
    { delay: 0, frame: Math.floor(t / 6) % 3 },
    { delay: 4, frame: Math.floor((t - 4) / 6) % 3 },
    { delay: 8, frame: Math.floor((t - 8) / 6) % 3 },
  ]
  
  for (const ring of rings) {
    if (ring.frame === 0 && Math.abs(dist - 1) < 0.5) return ON
    if (ring.frame === 1 && Math.abs(dist - 2) < 0.5) return ON
    if (ring.frame === 2 && Math.abs(dist - 3) < 0.5) return ON * 0.5
  }
  return 0
}

// 7. Converge - Four dots converging to center
export const convergePattern: PixelPattern = (x, y, t) => {
  const cycle = t % 22
  const positions = [
    { startX: 1, startY: 1, targetX: 3, targetY: 3 },
    { startX: 6, startY: 1, targetX: 4, targetY: 3 },
    { startX: 1, startY: 6, targetX: 3, targetY: 4 },
    { startX: 6, startY: 6, targetX: 4, targetY: 4 },
  ]
  
  for (const pos of positions) {
    let px, py
    if (cycle < 10) {
      // Moving in
      const progress = cycle / 10
      px = Math.round(pos.startX + (pos.targetX - pos.startX) * progress)
      py = Math.round(pos.startY + (pos.targetY - pos.startY) * progress)
    } else if (cycle < 11) {
      // Pause at center
      px = pos.targetX
      py = pos.targetY
    } else {
      // Moving out
      const progress = (cycle - 11) / 11
      px = Math.round(pos.targetX + (pos.startX - pos.targetX) * progress)
      py = Math.round(pos.targetY + (pos.startY - pos.targetY) * progress)
    }
    
    if (x === px && y === py) {
      return cycle < 11 ? ON : ON * 0.6
    }
  }
  return 0
}

// 8. Pendulum - Dot swinging in horizontal arc
export const pendulumPattern: PixelPattern = (x, y, t) => {
  const cy = 3
  const amplitude = 3
  const period = 26
  const phase = (t % period) / period
  const swing = Math.sin(phase * Math.PI * 2)
  const px = Math.round(3.5 + swing * amplitude)
  const py = Math.round(cy + Math.abs(swing) * 0.5)
  
  if (x === px && y === py) return ON * 0.75
  return 0
}

// 9. Morse - Dot flashing in morse code pattern
export const morsePattern: PixelPattern = (x, y, t) => {
  if (x !== 3 || y !== 3) return 0
  
  const cycle = t % 26
  // Short, pause, short, pause, long, long pause
  if (cycle < 3) return ON // short
  if (cycle < 5) return 0.2 // pause
  if (cycle < 8) return ON // short
  if (cycle < 10) return 0.2 // pause
  if (cycle < 16) return ON // long
  return 0.2 // long pause
}

// 10. Quantum - Dot teleporting between positions
export const quantumPattern: PixelPattern = (x, y, t) => {
  const positions = [
    { x: 2, y: 3 },
    { x: 5, y: 3 },
    { x: 3, y: 5 },
  ]
  
  const cycle = Math.floor(t / 4) % 3
  const pos = positions[cycle]
  
  if (x === pos.x && y === pos.y) {
    const frameInCycle = t % 4
    return frameInCycle === 0 ? ON * 0.7 : ON
  }
  return 0
}
