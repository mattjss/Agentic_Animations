"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Wave V - Rows fill top to bottom
 * Frame 1: [1,2,3] | Frame 2: [4,5,6] | Frame 3: [7,8,9] | Frame 4: Fade
 */
export default function WaveV() {
  const [frame, setFrame] = useState(0)
  const frames = [[1, 2, 3], [4, 5, 6], [7, 8, 9], []]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 200)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid activePixels={frames[frame]} />
}
