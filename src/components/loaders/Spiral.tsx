"use client"

import { useEffect, useState } from "react"
import PixelGrid4x4 from "./PixelGrid4x4"

const PATH = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9]

export default function Spiral() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPosition((p) => (p + 1) % PATH.length), 100)
    return () => clearInterval(id)
  }, [])

  return <PixelGrid4x4 activePixels={[PATH[position]]} />
}
