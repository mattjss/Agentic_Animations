"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Cross - Plus shape pulses
 * Frame 1: [5] | Frame 2: [2,4,5,6,8] | Frame 3: All cross | Frame 4: Reverse
 */
export default function Cross() {
  const [frame, setFrame] = useState(0)
  const crossPixels = [2, 4, 5, 6, 8]
  const frames = [[5], crossPixels, crossPixels, [5]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid activePixels={frames[frame]} />
}
