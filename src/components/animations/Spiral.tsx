"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Spiral: outward spiral from top-left
// 0→1→2→3→7→11→15→14→13→12→8→4→5→6→10→9
const SPIRAL_ORDER = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9]

interface SpiralProps {
  className?: string
}

export default function Spiral({ className = "" }: SpiralProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 17)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const activePixels = new Set(SPIRAL_ORDER.slice(0, frame))

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={activePixels} />
    </div>
  )
}
