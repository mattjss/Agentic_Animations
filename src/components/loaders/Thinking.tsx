"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const FRAMES: number[][] = [
  [2, 6, 10],
  [1, 5, 9],
  [6, 10, 14],
]

export default function Thinking() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 350)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={FRAMES[frame]} />
}
