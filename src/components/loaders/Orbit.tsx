"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Orbit: Single pixel orbiting perimeter
 * Path: 0→1→2→3→7→11→15→14→13→12→8→4→0, 150ms per position
 */
export default function Orbit() {
  const [position, setPosition] = useState(0)
  const path = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4]

  useEffect(() => {
    const id = setInterval(() => setPosition((p) => (p + 1) % path.length), 150)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={[path[position]]} />
}
