"use client"

import { useEffect, useState } from "react"

interface DotSequenceProps {
  className?: string
}

const DOT_POSITIONS = [
  { left: 2, top: 2 },   // top-left
  { left: 14, top: 2 },  // top-right
  { left: 14, top: 14 }, // bottom-right
  { left: 2, top: 14 },  // bottom-left
]

export default function DotSequence({ className = "" }: DotSequenceProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % 5) // 0-3: each dot, 4: all fade
    }, 250)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-5 h-5 flex items-center justify-center relative ${className}`}>
      {DOT_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white transition-opacity duration-150"
          style={{
            width: 4,
            height: 4,
            left: pos.left - 2,
            top: pos.top - 2,
            boxShadow: "0 0 2px rgba(255,255,255,0.4)",
            opacity: activeIndex === 4 ? 0.2 : activeIndex === i ? 1 : 0.2,
          }}
        />
      ))}
    </div>
  )
}
