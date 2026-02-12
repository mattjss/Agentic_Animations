"use client"

import { useEffect, useState } from "react"

interface EchoProps {
  className?: string
}

// Horizontal dot with fading trail
const ECHO_FRAMES = [
  "⠀⠀⠀\n⠀⠀⠀\n⠀⠀⠀",
  "⠁⠀⠀\n⠀⠀⠀\n⠀⠀⠀",
  "⠃⠁⠀\n⠀⠀⠀\n⠀⠀⠀",
  "⠇⠃⠁\n⠀⠀⠀\n⠀⠀⠀",
  "⠀⠀⠇\n⠀⠀⠃\n⠀⠀⠁",
  "⠀⠀⠃\n⠀⠀⠁\n⠀⠀⠀",
  "⠀⠀⠁\n⠀⠀⠀\n⠀⠀⠀",
  "⠀⠀⠀\n⠀⠀⠀\n⠀⠀⠀",
]

export default function Echo({ className = "" }: EchoProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % ECHO_FRAMES.length)
    }, 250)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {ECHO_FRAMES[frame]}
      </pre>
    </div>
  )
}
