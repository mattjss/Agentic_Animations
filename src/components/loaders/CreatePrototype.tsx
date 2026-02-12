"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const PERIMETER = [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]
const FRAMES: number[][] = [
  [6],
  [5, 6, 9, 10],
  [1, 2, 5, 6, 9, 10, 13, 14],
  PERIMETER,
  [1, 2, 5, 6, 9, 10, 13, 14],
  [5, 6, 9, 10],
  [6],
]

export default function CreatePrototype() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={FRAMES[frame]} />
}
