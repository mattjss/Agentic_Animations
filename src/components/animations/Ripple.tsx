"use client"

import { useEffect, useState } from "react"

interface RippleProps {
  className?: string
}

// Square expanding outward
const RIPPLE_FRAMES = [
  "⠀⠀⠀\n⠀⠂⠀\n⠀⠀⠀",
  "⠄⠄⠄\n⠄⠀⠄\n⠄⠄⠄",
  "⠶⠶⠶\n⠶⠀⠶\n⠶⠶⠶",
  "⠶⠶⠶\n⠶⣿⠶\n⠶⠶⠶",
  "⠶⠶⠶\n⠶⠀⠶\n⠶⠶⠶",
  "⠄⠄⠄\n⠄⠀⠄\n⠄⠄⠄",
  "⠀⠀⠀\n⠀⠂⠀\n⠀⠀⠀",
]

export default function Ripple({ className = "" }: RippleProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % RIPPLE_FRAMES.length)
    }, 350)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {RIPPLE_FRAMES[frame]}
      </pre>
    </div>
  )
}
