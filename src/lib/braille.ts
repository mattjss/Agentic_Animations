/**
 * Decode braille unicode string to 4×4 grid indices (0-15).
 * Each braille char is 2×4 dots. Up to 2 chars map to our 4 cols (char0→cols0-1, char1→cols2-3).
 */
export function brailleToGridIndices(brailleStr: string): number[] {
  const indices: number[] = []
  const maxChars = Math.min(brailleStr.length, 2)
  for (let i = 0; i < maxChars; i++) {
    const code = brailleStr.charCodeAt(i) - 0x2800
    if (code < 0 || code > 255) continue
    const colOffset = i * 2
    const dots: [number, number][] = [
      [0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [3, 0], [3, 1],
    ]
    for (let d = 0; d < 8; d++) {
      if (code & (1 << d)) {
        const [r, c] = dots[d]
        const col = c + colOffset
        if (col < 4) indices.push(r * 4 + col)
      }
    }
  }
  return indices
}
