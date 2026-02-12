"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * Corners-Flash: Four corners flash clockwise
 * 0 (TL) → 3 (TR) → 15 (BR) → 12 (BL) → repeat, 250ms each
 */
export default function CornersFlash() {
  const [frame, setFrame] = useState(0)
  const frames = [[0], [3], [15], [12]]

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 250)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={frames[frame]} />
}
