"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Plus-Center: Plus sign pulses from center outward
 * [5] → [1,4,5,6,9] → [1,4,5,6,9,10,13] → reverse, 300ms each
 */
export default function PlusCenter() {
  const [frame, setFrame] = useState(0)
  const frames = [[5], [1, 4, 5, 6, 9], [1, 4, 5, 6, 9, 10, 13], [1, 4, 5, 6, 9], [5]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 300)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
