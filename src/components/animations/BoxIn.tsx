"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Box In: outer perimeter → inner → center → expand back
// Outer: 0,1,2,3,4,7,8,11,12,13,14,15
// Inner: 5,6,9,10
// Center: 10 (or 2×2: 5,6,9,10)
const BOX_IN_FRAMES = [
  new Set([0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]), // outer
  new Set([5, 6, 9, 10]), // inner
  new Set([10]), // center
  new Set([5, 6, 9, 10]),
  new Set([0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15]),
]

interface BoxInProps {
  className?: string
}

export default function BoxIn({ className = "" }: BoxInProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % BOX_IN_FRAMES.length)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={BOX_IN_FRAMES[frame]} />
    </div>
  )
}
