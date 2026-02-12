"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const FRAMES: number[][] = [
  [6],
  [6, 10],
  [5, 6, 9, 10],
  [1, 5, 6, 9, 10, 13],
  [5, 6, 9, 10],
  [6, 10],
  [6],
]

export default function PlusRed() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 250)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={FRAMES[frame]} />
}
