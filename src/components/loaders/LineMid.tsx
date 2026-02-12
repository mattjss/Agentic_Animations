"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Line-Mid: Vertical line grows/shrinks from center
 * [6,10] → [2,6,10,14] → [6,10], 500ms
 */
export default function LineMid() {
  const [frame, setFrame] = useState(0)
  const frames = [[6, 10], [2, 6, 10, 14], [6, 10]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 500)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
