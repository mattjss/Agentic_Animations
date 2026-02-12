"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Frame-Pulse: Perimeter frame pulses in/out
 * Perimeter [0,1,2,3,4,7,8,11,12,13,14,15] → empty → repeat, 400ms each
 */
export default function FramePulse() {
  const [frame, setFrame] = useState(0)
  const perimeter = [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]
  const frames = [perimeter, []]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 400)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
