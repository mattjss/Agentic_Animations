"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Pulse - Center pixel pulses outward
 * Frame 1: [5] | Frame 2: [5] + [2,4,6,8] 50% | Frame 3: [5] + [2,4,6,8] 100% | Frame 4: Reverse
 */
export default function Pulse() {
  const [frame, setFrame] = useState(0)
  const frames = [
    { active: [5], partial: [] },
    { active: [5], partial: [2, 4, 6, 8] },
    { active: [5, 2, 4, 6, 8], partial: [] },
    { active: [5], partial: [2, 4, 6, 8] },
  ]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 400)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid activePixels={frames[frame].active} partialPixels={frames[frame].partial} />
}
