"use client"

import { GRID_4X4_POSITIONS } from "@/lib/loader-config"

interface PixelGrid4x4Props {
  activePixels: number[]
  partialPixels?: number[]
  className?: string
}

export default function PixelGrid4x4({ activePixels, partialPixels = [], className = "" }: PixelGrid4x4Props) {
  return (
    <div
      className={`flex-shrink-0 ${className}`}
      style={{
        width: 16,
        height: 16,
        display: "grid",
        gridTemplateColumns: "repeat(4, 3px)",
        gridTemplateRows: "repeat(4, 3px)",
        gap: 1,
      }}
    >
      {GRID_4X4_POSITIONS.map((pos) => {
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
              boxShadow: isActive || isPartial ? "0 0 4px rgba(255, 255, 255, 0.3)" : "none",
              transition: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        )
      })}
    </div>
  )
}
