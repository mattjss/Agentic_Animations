"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Box - Perimeter box pulses
 * Frame 1: Perimeter [1,2,3,6,9,8,7,4] | Frame 2: All | Frame 3: Center [5] | Frame 4: Reverse
 */
export default function Box() {
  const [frame, setFrame] = useState(0)
  const perimeter = [1, 2, 3, 6, 9, 8, 7, 4]
  const all = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const frames = [perimeter, all, [5], perimeter]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid activePixels={frames[frame]} />
}
