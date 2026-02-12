"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Wave H: vertical bars sweep left to right
// Col 0: 0,4,8,12 | Col 1: 1,5,9,13 | Col 2: 2,6,10,14 | Col 3: 3,7,11,15
const WAVE_H_FRAMES = [
  new Set([0, 4, 8, 12]),
  new Set([1, 5, 9, 13]),
  new Set([2, 6, 10, 14]),
  new Set([3, 7, 11, 15]),
  new Set([]),
]

interface WaveHProps {
  className?: string
}

export default function WaveH({ className = "" }: WaveHProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % WAVE_H_FRAMES.length)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={WAVE_H_FRAMES[frame]} />
    </div>
  )
}
