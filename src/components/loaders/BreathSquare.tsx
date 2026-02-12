"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Breath-Square: Square that breathes (grows/shrinks symmetrically)
 * [6] → [5,6] → [5,6,9,10] → [1,2,5,6,9,10,13,14] → reverse, 350ms
 */
export default function BreathSquare() {
  const [frame, setFrame] = useState(0)
  const frames = [
    [6],
    [5, 6],
    [5, 6, 9, 10],
    [1, 2, 5, 6, 9, 10, 13, 14],
    [5, 6, 9, 10],
    [5, 6],
    [6],
  ]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 350)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
