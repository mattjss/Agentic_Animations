"use client"

import { useState, useEffect } from "react"
import { spinners, type BrailleSpinnerName } from "unicode-animations"
import { brailleToGridIndices } from "@/lib/braille"
import PixelGrid4x4 from "./PixelGrid4x4"

interface UnicodeBrailleLoaderProps {
  name: BrailleSpinnerName
}

export default function UnicodeBrailleLoader({ name }: UnicodeBrailleLoaderProps) {
  const spinner = spinners[name]
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (!spinner?.frames?.length) return
    const id = setInterval(
      () => setFrame((f) => (f + 1) % spinner.frames.length),
      spinner.interval
    )
    return () => clearInterval(id)
  }, [name, spinner?.frames?.length, spinner?.interval])

  if (!spinner?.frames?.length) return null
  const text = spinner.frames[frame] ?? spinner.frames[0]
  const activePixels = brailleToGridIndices(text)

  return (
    <PixelGrid4x4
      activePixels={activePixels}
      transitionDuration={Math.min(spinner.interval, 100)}
    />
  )
}
