"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Triangle: Horizontal bar that grows/shrinks
 * [4,8] → [4,5,8,9] → [4,8], 400ms
 */
export default function Triangle() {
  const [frame, setFrame] = useState(0)
  const frames = [[4, 8], [4, 5, 8, 9], [4, 8]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 400)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
