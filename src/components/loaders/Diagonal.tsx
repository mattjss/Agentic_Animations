"use client"

import { useEffect, useState } from "react"
import PixelGrid from "./PixelGrid"

/**
 * Diagonal - Diagonal line shifts through center
 * Frame 1: [1,5,9] | Frame 2: [4,5,6] | Frame 3: [3,5,7] | Frame 4: [2,5,8]
 */
export default function Diagonal() {
  const [frame, setFrame] = useState(0)
  const frames = [
    [1, 5, 9], // top-left to bottom-right
    [4, 5, 6], // horizontal center
    [3, 5, 7], // top-right to bottom-left
    [2, 5, 8], // vertical center
  ]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 250)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid activePixels={frames[frame]} />
}
