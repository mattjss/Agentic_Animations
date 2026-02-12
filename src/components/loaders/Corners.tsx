"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Corners - Four corners light in sequence
 * [1] → [3] → [9] → [7] → [1,3,9,7] → fade
 */
export default function Corners() {
  const [frame, setFrame] = useState(0)
  const frames = [[1], [3], [9], [7], [1, 3, 9, 7], []]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 200)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid activePixels={frames[frame]} />
}
