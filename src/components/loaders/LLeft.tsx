"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * L-Left: Vertical bar pulses height
 * [6,10] → [2,6,10] → [2,6,10,14] → [2,6,10] → [6,10], 300ms
 */
export default function LLeft() {
  const [frame, setFrame] = useState(0)
  const frames = [[6, 10], [2, 6, 10], [2, 6, 10, 14], [2, 6, 10], [6, 10]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
