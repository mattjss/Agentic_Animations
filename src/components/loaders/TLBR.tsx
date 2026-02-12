"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

/**
 * TL-BR: Single pixel moves diagonally
 * [0] → [5] → [10] → [15], 200ms
 */
export default function TLBR() {
  const [position, setPosition] = useState(0)
  const path = [0, 5, 10, 15]

  useEffect(() => {
    const id = setInterval(() => setPosition((p) => (p + 1) % path.length), 200)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={[path[position]]} />
}
