"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Orbit: pixel travels clockwise around perimeter
// Top: 0,1,2,3 | Right: 7,11,15 | Bottom: 14,13,12 | Left: 8,4
// 12 positions: 0→1→2→3→7→11→15→14→13→12→8→4→0
const ORBIT_POSITIONS = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4]

interface OrbitProps {
  className?: string
}

export default function Orbit({ className = "" }: OrbitProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % ORBIT_POSITIONS.length)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const activePixels = new Set([ORBIT_POSITIONS[frame]])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={activePixels} />
    </div>
  )
}
