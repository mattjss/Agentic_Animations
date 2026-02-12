"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Stairs: diagonal from bottom-left builds up
// 1 pixel: 12 (bottom-left) | 2: 12,8 | 3: 12,8,4 | 4: 12,8,4,0
// Or bottom-left = 15? Row 3 col 3. Index = 3*4+3 = 15. Bottom-left = row 3 col 0 = 12.
// Diagonal: 12 → 8 → 4 → 0 (bottom-left to top-right)
// 1px: 12, 2px: 12,8, 3px: 12,8,4, 4px: 12,8,4,0, then reverse
const STAIRS_FRAMES = [
  new Set([12]),
  new Set([8, 12]),
  new Set([4, 8, 12]),
  new Set([0, 4, 8, 12]),
  new Set([4, 8, 12]),
  new Set([8, 12]),
  new Set([12]),
  new Set([]),
]

interface StairsProps {
  className?: string
}

export default function Stairs({ className = "" }: StairsProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % STAIRS_FRAMES.length)
    }, 250)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={STAIRS_FRAMES[frame]} />
    </div>
  )
}
