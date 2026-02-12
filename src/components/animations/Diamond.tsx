"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Diamond: center → small → large → small → center
// Grid: row*4+col, center=10 (row2,col2), cardinal: 1(top),6(right),9(left),13(bottom)
function getDiamondFrame(n: number): Set<number> {
  const frames = [
    new Set([10]), // center only
    new Set([1, 5, 6, 9, 10]), // 5px: center + 4 cardinal
    new Set([1, 2, 4, 5, 6, 8, 9, 10, 13]), // 9px diamond
    new Set([1, 5, 6, 9, 10]),
    new Set([10]),
  ]
  return frames[n % frames.length]
}

interface DiamondProps {
  className?: string
}

export default function Diamond({ className = "" }: DiamondProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 5)
    }, 350)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={getDiamondFrame(frame)} />
    </div>
  )
}
