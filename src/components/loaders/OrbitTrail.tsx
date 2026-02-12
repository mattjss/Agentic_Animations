"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Orbit-Trail: Pixel orbits perimeter with fading trail
 * Current position full opacity, previous position 50% (trail)
 * Path: 0→1→2→3→7→11→15→14→13→12→8→4, 200ms per position
 */
export default function OrbitTrail() {
  const [position, setPosition] = useState(0)
  const path = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4]

  useEffect(() => {
    const id = setInterval(() => setPosition((p) => (p + 1) % path.length), 200)
    return () => clearInterval(id)
  }, [])

  const current = path[position]
  const prev = path[(position - 1 + path.length) % path.length]

  return <PixelGrid4x4 activePixels={[current]} partialPixels={[prev]} />
}
