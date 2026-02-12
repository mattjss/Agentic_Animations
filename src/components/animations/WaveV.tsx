"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Wave V: horizontal bars sweep top to bottom
// Row 0: 0,1,2,3 | Row 1: 4,5,6,7 | Row 2: 8,9,10,11 | Row 3: 12,13,14,15
const WAVE_V_FRAMES = [
  new Set([0, 1, 2, 3]),
  new Set([4, 5, 6, 7]),
  new Set([8, 9, 10, 11]),
  new Set([12, 13, 14, 15]),
  new Set([]),
]

interface WaveVProps {
  className?: string
}

export default function WaveV({ className = "" }: WaveVProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % WAVE_V_FRAMES.length)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={WAVE_V_FRAMES[frame]} />
    </div>
  )
}
