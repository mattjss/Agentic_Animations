"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Sparse: Diagonal dots that shift position
 * [2,6,10] → [1,5,9] → [6,10,14], 350ms
 */
export default function Sparse() {
  const [frame, setFrame] = useState(0)
  const frames = [[2, 6, 10], [1, 5, 9], [6, 10, 14]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 350)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
