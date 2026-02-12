"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Blink - All pixels blink in short-short-long rhythm
 * 200ms on, 150ms off, 200ms on, 150ms off, 400ms on, 300ms off
 */
export default function Blink() {
  const [frame, setFrame] = useState(0)
  const allPixels = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const sequence = [true, false, true, false, true, false] // on, off, on, off, on, off
  const timings = [200, 150, 200, 150, 400, 300] // ms per frame

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const scheduleNext = (idx: number) => {
      timeoutId = setTimeout(() => {
        const nextIdx = (idx + 1) % sequence.length
        setFrame(nextIdx)
        scheduleNext(nextIdx)
      }, timings[idx])
    }
    scheduleNext(0)
    return () => clearTimeout(timeoutId)
  }, [])

  return <PixelGrid activePixels={sequence[frame] ? allPixels : []} />
}
