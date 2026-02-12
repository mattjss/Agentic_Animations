"use client"

import { useEffect, useState } from "react"

interface RainProps {
  className?: string
}

// Three columns of dots falling vertically
const RAIN_FRAMES = [
  "⠁⠀⠀\n⠀⠀⠀\n⠀⠀⠀",
  "⠀⠀⠀\n⠁⠀⠀\n⠀⠀⠀",
  "⠀⠀⠀\n⠀⠀⠀\n⠁⠀⠀",
  "⠁⠁⠀\n⠀⠀⠀\n⠀⠀⠁",
  "⠀⠀⠁\n⠁⠀⠀\n⠀⠀⠀",
  "⠀⠀⠀\n⠀⠀⠁\n⠁⠀⠀",
  "⠁⠀⠀\n⠀⠀⠀\n⠀⠀⠁",
]

export default function Rain({ className = "" }: RainProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % RAIN_FRAMES.length)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {RAIN_FRAMES[frame]}
      </pre>
    </div>
  )
}
