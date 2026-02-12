"use client"

import { useEffect, useState } from "react"

interface MorseProps {
  className?: string
}

// Morse-like rhythm: short (⠂) 300ms on, 200ms off; long (⠶) 600ms on, 400ms off
// Pattern: ··· − − (SOS-like)
const MORSE_SEQUENCE = [
  { chars: "⠂", duration: 300 },
  { chars: "⠀", duration: 200 },
  { chars: "⠂", duration: 300 },
  { chars: "⠀", duration: 200 },
  { chars: "⠂", duration: 300 },
  { chars: "⠀", duration: 400 },
  { chars: "⠶", duration: 600 },
  { chars: "⠀", duration: 400 },
  { chars: "⠶", duration: 600 },
  { chars: "⠀", duration: 800 },
]

export default function Morse({ className = "" }: MorseProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const { duration } = MORSE_SEQUENCE[frame]
    const timer = setTimeout(() => {
      setFrame((f) => (f + 1) % MORSE_SEQUENCE.length)
    }, duration)
    return () => clearTimeout(timer)
  }, [frame])

  return (
    <div className={`w-4 h-4 flex items-center justify-center ${className}`}>
      <pre
        className="braille-animation"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        {MORSE_SEQUENCE[frame].chars}
      </pre>
    </div>
  )
}
