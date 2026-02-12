"use client"

import { useEffect, useState } from "react"
import { PixelGrid } from "./pixel-grid"

// Plus: center → 5px cross → 9px cross → 5px → center
// Center: 10 | 5px plus: 1,5,9,10,6 | 9px: 1,4,5,6,8,9,10,13,2
const PLUS_FRAMES = [
  new Set([10]),
  new Set([1, 5, 6, 9, 10]),
  new Set([1, 2, 4, 5, 6, 8, 9, 10, 13]),
  new Set([1, 5, 6, 9, 10]),
  new Set([10]),
]

interface PlusProps {
  className?: string
}

export default function Plus({ className = "" }: PlusProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % PLUS_FRAMES.length)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <PixelGrid activePixels={PLUS_FRAMES[frame]} />
    </div>
  )
}
