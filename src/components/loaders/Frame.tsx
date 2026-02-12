"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const PATH = [0, 1, 2, 6, 5, 4, 8, 9, 10, 14, 15]

export default function Frame() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPosition((p) => (p + 1) % PATH.length), 120)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={[PATH[position]]} />
}
