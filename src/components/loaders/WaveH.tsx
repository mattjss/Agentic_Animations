"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Wave-H: Vertical bars sweep left to right
 * [0,4,8,12] → [1,5,9,13] → [2,6,10,14] → [3,7,11,15] → repeat, 150ms each
 */
export default function WaveH() {
  const [frame, setFrame] = useState(0)
  const frames = [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 150)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
