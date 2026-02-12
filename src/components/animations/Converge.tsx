"use client"

import { useEffect, useState } from "react"

interface ConvergeProps {
  className?: string
}

// Four corners moving to center
const CONVERGE_FRAMES = [
  "⠁⠀⠈\n⠀⠀⠀\n⠐⠀⠠",
  "⠀⠁⠁⠀\n⠀⠀⠀⠀\n⠀⠐⠠⠀",
  "⠀⠀⠶⠀\n⠀⠀⠀⠀\n⠀⠀⠶⠀",
  "⠀⠀⠶⠀\n⠀⠀⣿⠀\n⠀⠀⠶⠀",
  "⠀⠀⠶⠀\n⠀⠀⠀⠀\n⠀⠀⠶⠀",
  "⠀⠁⠁⠀\n⠀⠀⠀⠀\n⠀⠐⠠⠀",
  "⠁⠀⠈\n⠀⠀⠀\n⠐⠀⠠",
]

export default function Converge({ className = "" }: ConvergeProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % CONVERGE_FRAMES.length)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {CONVERGE_FRAMES[frame]}
      </pre>
    </div>
  )
}
