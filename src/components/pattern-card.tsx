"use client"

import { PixelCanvas } from "./pixel-canvas"
import { ShimmerText } from "./shimmer-text"
import type { PatternEntry } from "@/lib/pixel-patterns"

interface PatternCardProps {
  pattern: PatternEntry
}

export function PatternCard({ pattern }: PatternCardProps) {
  return (
    <div className="flex items-center py-5 px-5">
      <div className="shrink-0" style={{ width: 20, height: 20 }}>
        <PixelCanvas
          getPixel={pattern.fn}
          size={8}
          canvasSize={20}
          fps={10}
        />
      </div>

      <ShimmerText
        className="text-xs shrink-0 ml-8"
        duration={2.4}
      >
        Agent
      </ShimmerText>

      <span className="ml-3 text-xs text-white/90 whitespace-nowrap">
        {pattern.name}
      </span>
    </div>
  )
}
