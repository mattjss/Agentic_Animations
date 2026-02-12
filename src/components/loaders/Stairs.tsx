"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Stairs: Staircase diagonal builds up and down
 * [0] → [0,4] → [0,4,5,9] → [0,4,5,9,10,14] → reverse, 250ms each
 */
export default function Stairs() {
  const [frame, setFrame] = useState(0)
  const frames = [[0], [0, 4], [0, 4, 5, 9], [0, 4, 5, 9, 10, 14], [0, 4, 5, 9], [0, 4], [0]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 250)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
