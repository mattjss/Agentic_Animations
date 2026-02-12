"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const FRAMES: number[][] = [
  [2, 6],
  [2, 5, 6, 7],
  [2, 5, 6, 7, 10],
  [2, 5, 6, 7],
  [2, 6],
]

export default function Striangle() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={FRAMES[frame]} />
}
