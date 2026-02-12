"use client"

import { GRID_POSITIONS } from "@/lib/loader-config"

interface PixelGridProps {
  activePixels: number[]
  partialPixels?: number[]
  className?: string
}

export default function PixelGrid({ activePixels, partialPixels = [], className = "" }: PixelGridProps) {
  return (
    <div
      className={`flex-shrink-0 ${className}`}
      style={{
        width: 12,
        height: 12,
        display: "grid",
        gridTemplateColumns: "repeat(3, 3px)",
        gridTemplateRows: "repeat(3, 3px)",
        gap: 0.5,
      }}
    >
      {GRID_POSITIONS.map((pos) => {
        const isActive = activePixels.includes(pos)
        const isPartial = partialPixels.includes(pos)
        const opacity = isActive ? 1 : isPartial ? 0.5 : 0
        return (
          <div
            key={pos}
            style={{
              width: 3,
              height: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: 0,
              opacity,
              transition: "opacity 100ms ease",
            }}
          />
        )
      })}
    </div>
  )
}
