"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Left-Right: Two blocks alternate sides
 * [0,4] → [3,7], 500ms
 */
export default function LeftRight() {
  const [frame, setFrame] = useState(0)
  const frames = [[0, 4], [3, 7]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 500)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
