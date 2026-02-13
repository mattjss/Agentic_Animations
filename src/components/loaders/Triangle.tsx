"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/** Horizontal bar that expands/contracts */
const FRAMES: number[][] = [
  [4, 8],
  [4, 5, 8, 9],
  [4, 8],
]

export default function Triangle() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 400)
    return () => clearInterval(id)
  }, [])

  return (
    <PixelGrid4x4
      activePixels={FRAMES[frame]}
      transitionDuration={400}
      transitionTiming="ease-in-out"
    />
  )
}
