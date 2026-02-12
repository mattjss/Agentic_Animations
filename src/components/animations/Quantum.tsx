"use client"

import { useEffect, useState } from "react"

interface QuantumProps {
  className?: string
}

// Instant position jumps (no fade)
const QUANTUM_FRAMES = [
  "⠁⠀⠀\n⠀⠀⠀\n⠀⠀⠀",
  "⠀⠀⠁\n⠀⠀⠀\n⠀⠀⠀",
  "⠀⠁⠀\n⠀⠀⠀\n⠀⠀⠀",
]

export default function Quantum({ className = "" }: QuantumProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % QUANTUM_FRAMES.length)
    }, 450)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {QUANTUM_FRAMES[frame]}
      </pre>
    </div>
  )
}
