"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * L-TL: Two separate L-shapes blink
 * [1,5,6] (horizontal L) → [5,6,10] (vertical L), 600ms
 */
export default function LTL() {
  const [frame, setFrame] = useState(0)
  const frames = [[1, 5, 6], [5, 6, 10]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 600)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
