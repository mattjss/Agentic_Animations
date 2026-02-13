"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/** Two blocks alternating left and right sides */
const FRAMES: number[][] = [
  [0, 4],   // left
  [3, 7],   // right
]

export default function LeftRight() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <PixelGrid4x4
      activePixels={FRAMES[frame]}
      transitionDuration={500}
      transitionTiming="ease-in-out"
    />
  )
}
