"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Corners: TL → TR → BR → BL → all → none
// 0=TL, 3=TR, 15=BR, 12=BL
const CORNERS_FRAMES = [
  new Set([0]),
  new Set([3]),
  new Set([15]),
  new Set([12]),
  new Set([0, 3, 12, 15]),
  new Set([]),
]

interface CornersProps {
  className?: string
}

export default function Corners({ className = "" }: CornersProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % CORNERS_FRAMES.length)
    }, 250)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={CORNERS_FRAMES[frame]} />
    </div>
  )
}
