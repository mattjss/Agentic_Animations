"use client"

import { useEffect, useState } from "react"

interface BreatheProps {
  className?: string
}

// Diamond expansion: ⠀⠂⠀ → ⠄⠶⠄ → ⠶⣿⠶ → ⠄⠶⠄ → ⠀⠂⠀
const BREATHE_FRAMES = [
  "⠀⠂⠀\n⠀⠀⠀\n⠀⠀⠀",
  "⠄⠶⠄\n⠶⠶⠶\n⠄⠶⠄",
  "⠶⣿⠶\n⣿⣿⣿\n⠶⣿⠶",
  "⠄⠶⠄\n⠶⠶⠶\n⠄⠶⠄",
  "⠀⠂⠀\n⠀⠀⠀\n⠀⠀⠀",
]

export default function Breathe({ className = "" }: BreatheProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % BREATHE_FRAMES.length)
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {BREATHE_FRAMES[frame]}
      </pre>
    </div>
  )
}
