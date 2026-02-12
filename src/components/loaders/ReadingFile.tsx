"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const FRAMES: number[][] = [
  [6, 10],
  [2, 6, 10, 14],
  [6, 10],
]

export default function ReadingFile() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 500)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={FRAMES[frame]} />
}
