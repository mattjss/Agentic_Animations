"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Spiral-In: Pixels light up in inward spiral (cumulative trail)
 * Path: 0→1→2→3→7→11→15→14→13→12→8→4→5→6→10→9, 100ms per pixel
 */
export default function SpiralIn() {
  const [position, setPosition] = useState(0)
  const path = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9]

  useEffect(() => {
    const id = setInterval(() => setPosition((p) => (p + 1) % path.length), 100)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={path.slice(0, position + 1)} />
}
