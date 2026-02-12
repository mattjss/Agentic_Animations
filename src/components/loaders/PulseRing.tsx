"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Pulse-Ring: Center dot expands into ring, then contracts
 * [6] → [5,6,9,10] → perimeter ring → [5,6,9,10] → [6], 300ms
 */
export default function PulseRing() {
  const [frame, setFrame] = useState(0)
  const perimeter = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4]
  const frames = [[6], [5, 6, 9, 10], perimeter, [5, 6, 9, 10], [6]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
