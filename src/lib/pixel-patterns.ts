/**
 * Pixel pattern library -- ultra-minimal dot animations.
 *
 * Inspired by Gunnar Gray's Perplexity loading aesthetic:
 *   - Only 1-6 lit dots per frame
 *   - Slow, deliberate movement
 *   - Dots confined to a tight cluster, not spread across the grid
 *   - Pure on/off -- no gradients, no partial opacity
 *
 * Each pattern is a pure function: (x, y, t) => opacity (0 or ~0.85)
 * x, y: grid coordinates (0-7 in an 8x8 grid), t: frame counter
 */

export type PixelPattern = (x: number, y: number, t: number) => number

// ─── Helpers ──────────────────────────────────────────────

function hash(a: number, b: number, seed: number) {
  let h = (a * 374761393 + b * 668265263 + seed * 1274126177) | 0
  h = ((h ^ (h >> 13)) * 1103515245) | 0
  return ((h ^ (h >> 16)) & 0x7fffffff) / 0x7fffffff
}

const ON = 0.9
const GRID = 8

// ─── 1. Braille ─────────────────────────────────────────────
// Classic braille cell: 2 columns x 3 rows cycling through states
export const braille: PixelPattern = (x, y, t) => {
  const cx = 3, cy = 1
  const col = x - cx
  const row = y - cy
  if (col < 0 || col > 1 || row < 0 || row > 4) return 0
  const frame = Math.floor(t / 8) % 6
  const cells = [
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  ]
  const idx = row * 2 + col
  return cells[frame][idx] ? ON : 0
}

// ─── 2. Orbit ───────────────────────────────────────────────
// Single dot circling a center point, very slow
export const orbit: PixelPattern = (x, y, t) => {
  const cx = 3.5, cy = 3.5
  const angle = t * 0.1
  const r = 2
  const px = Math.round(cx + Math.cos(angle) * r)
  const py = Math.round(cy + Math.sin(angle) * r)
  if (x === px && y === py) return ON
  // Faint center
  if (x === 3 && y === 3) return 0.25
  if (x === 4 && y === 4) return 0.25
  return 0
}

// ─── 3. Breathe ─────────────────────────────────────────────
// Single dot in the center, slow fade in and out
export const breathe: PixelPattern = (x, y, t) => {
  if (x !== 3 || y !== 3) return 0
  const v = (Math.sin(t * 0.08) + 1) / 2
  return v * ON
}

// ─── 4. Snake ───────────────────────────────────────────────
// 3 dots sliding horizontally
export const snake: PixelPattern = (x, y, t) => {
  if (y !== 3) return 0
  const head = Math.floor(t * 0.25) % GRID
  for (let i = 0; i < 3; i++) {
    const seg = (head - i + GRID) % GRID
    if (x === seg) return i === 0 ? ON : 0.45
  }
  return 0
}

// ─── 5. Fill Sweep ──────────────────────────────────────────
// Dots filling a 3x3 area one by one, then clearing
export const fillSweep: PixelPattern = (x, y, t) => {
  const ox = 2, oy = 2
  const lx = x - ox, ly = y - oy
  if (lx < 0 || lx > 2 || ly < 0 || ly > 2) return 0
  const idx = ly * 3 + lx
  const total = 9
  const frame = Math.floor(t / 4) % (total * 2)
  if (frame < total) return idx <= frame ? ON : 0
  return idx <= frame - total ? 0 : ON
}

// ─── 6. Pulse ───────────────────────────────────────────────
// Center dot with 4 cardinal dots pulsing outward
export const pulse: PixelPattern = (x, y, t) => {
  const cx = 3, cy = 3
  if (x === cx && y === cy) return ON
  const frame = Math.floor(t / 6) % 3
  const r = frame + 1
  const isCardinal =
    (x === cx && Math.abs(y - cy) === r) ||
    (y === cy && Math.abs(x - cx) === r)
  return isCardinal ? ON : 0
}

// ─── 7. Columns ─────────────────────────────────────────────
// 3 vertical columns with staggered bouncing dots
export const columns: PixelPattern = (x, y, t) => {
  if (x !== 2 && x !== 4 && x !== 6) return 0
  const col = (x - 2) / 2
  const offset = col * 5
  const pos = Math.round(2 + Math.sin((t * 0.12) + offset) * 2)
  return y === pos ? ON : 0
}

// ─── 8. Checkerboard ────────────────────────────────────────
// 4 dots in a 2x2 alternating pattern
export const checkerboard: PixelPattern = (x, y, t) => {
  const ox = 3, oy = 3
  const lx = x - ox, ly = y - oy
  if (lx < 0 || lx > 1 || ly < 0 || ly > 1) return 0
  const frame = Math.floor(t / 10) % 2
  return (lx + ly) % 2 === frame ? ON : 0
}

// ─── 9. Scan ────────────────────────────────────────────────
// A vertical line of 2 dots sweeping left to right
export const scan: PixelPattern = (x, y, t) => {
  if (y !== 3 && y !== 4) return 0
  const col = Math.floor(t / 4) % GRID
  return x === col ? ON : 0
}

// ─── 10. Rain ───────────────────────────────────────────────
// 2-3 drops falling at different speeds
export const rain: PixelPattern = (x, y, t) => {
  const drops = [
    { col: 2, speed: 0.2, offset: 0 },
    { col: 5, speed: 0.15, offset: 4 },
    { col: 3, speed: 0.18, offset: 9 },
  ]
  for (const d of drops) {
    if (x !== d.col) continue
    const pos = Math.floor(t * d.speed + d.offset) % GRID
    if (y === pos) return ON
    if (y === (pos - 1 + GRID) % GRID) return 0.3
  }
  return 0
}

// ─── 11. Cascade ────────────────────────────────────────────
// Diagonal wave -- 2 dots moving diagonally
export const cascade: PixelPattern = (x, y, t) => {
  const step = Math.floor(t / 5) % GRID
  if (x === step && y === step) return ON
  const step2 = (step + 3) % GRID
  if (x === step2 && y === step2) return ON
  return 0
}

// ─── 12. Sparkle ────────────────────────────────────────────
// 1-2 random dots appearing in the center region
export const sparkle: PixelPattern = (x, y, t) => {
  if (x < 1 || x > 6 || y < 1 || y > 6) return 0
  const frame = Math.floor(t / 3)
  const v = hash(x, y, frame)
  if (v > 0.96) return ON
  const prev = hash(x, y, frame - 1)
  if (prev > 0.96) return 0.25
  return 0
}

// ─── 13. Wave Rows ──────────────────────────────────────────
// 3 rows of dots oscillating left-right
export const waveRows: PixelPattern = (x, y, t) => {
  if (y !== 2 && y !== 4 && y !== 6) return 0
  const row = (y - 2) / 2
  const pos = Math.round(3 + Math.sin(t * 0.1 + row * 2) * 2)
  return x === pos ? ON : 0
}

// ─── 14. Helix ──────────────────────────────────────────────
// Two dots spiraling around each other vertically
export const helix: PixelPattern = (x, y, t) => {
  const cy = 3.5
  const phase = t * 0.12
  const x1 = Math.round(3 + Math.sin(phase) * 2)
  const x2 = Math.round(3 + Math.sin(phase + Math.PI) * 2)
  const y1 = Math.round(cy + Math.cos(phase) * 1.5)
  const y2 = Math.round(cy + Math.cos(phase + Math.PI) * 1.5)
  if (x === x1 && y === y1) return ON
  if (x === x2 && y === y2) return ON
  return 0
}

// ─── 15. Diagonal Swipe ─────────────────────────────────────
// A single dot sweeping diagonally across the grid
export const diagonalSwipe: PixelPattern = (x, y, t) => {
  const step = Math.floor(t / 3) % GRID
  if (x === step && y === step) return ON
  // Trail
  const prev = (step - 1 + GRID) % GRID
  if (x === prev && y === prev) return 0.3
  return 0
}

// ─── PATTERN REGISTRY ───────────────────────────────────────

export interface PatternEntry {
  id: string
  name: string
  fn: PixelPattern
}

export const patterns: PatternEntry[] = [
  { id: "braille", name: "Braille", fn: braille },
  { id: "orbit", name: "Orbit", fn: orbit },
  { id: "breathe", name: "Breathe", fn: breathe },
  { id: "snake", name: "Snake", fn: snake },
  { id: "fill-sweep", name: "Fill Sweep", fn: fillSweep },
  { id: "pulse", name: "Pulse", fn: pulse },
  { id: "columns", name: "Columns", fn: columns },
  { id: "checkerboard", name: "Checkerboard", fn: checkerboard },
  { id: "scan", name: "Scan", fn: scan },
  { id: "rain", name: "Rain", fn: rain },
  { id: "cascade", name: "Cascade", fn: cascade },
  { id: "sparkle", name: "Sparkle", fn: sparkle },
  { id: "wave-rows", name: "Wave Rows", fn: waveRows },
  { id: "helix", name: "Helix", fn: helix },
  { id: "diagonal-swipe", name: "Diagonal Swipe", fn: diagonalSwipe },
]
