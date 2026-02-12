"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Wave-RL: Plus that rotates 45° (becomes X)
 * [6,10] (vertical) → [1,6,10,13] (plus) → [5,6,10] (rotated), 350ms
 */
export default function WaveRL() {
  const [frame, setFrame] = useState(0)
  const frames = [[6, 10], [1, 6, 10, 13], [5, 6, 10]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 350)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
