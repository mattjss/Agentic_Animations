"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Bounce: Pixel bounces vertically in center column
 * [2] → [6] → [10] → [14] → [10] → [6] → [2]
 * Variable timing: 200, 150, 150, 100, 200, 200, 200ms
 */
export default function Bounce() {
  const [frame, setFrame] = useState(0)
  const frames = [[2], [6], [10], [14], [10], [6], [2]]
  const timings = [200, 150, 150, 100, 200, 200, 200]

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const scheduleNext = (idx: number) => {
      timeoutId = setTimeout(() => {
        const nextIdx = (idx + 1) % frames.length
        setFrame(nextIdx)
        scheduleNext(nextIdx)
      }, timings[idx])
    }
    scheduleNext(0)
    return () => clearTimeout(timeoutId)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
