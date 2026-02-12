"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * L-Tilt: L-shaped pixels rotate 90° each frame
 * [0,1,4,5] → [2,3,7,11] → [10,11,14,15] → [0,4,8,12], 350ms each
 */
export default function LTilt() {
  const [frame, setFrame] = useState(0)
  const frames = [[0, 1, 4, 5], [2, 3, 7, 11], [10, 11, 14, 15], [0, 4, 8, 12]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 350)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
