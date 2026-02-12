"use client"

interface PixelGridProps {
  activePixels: Set<number>
  pixelOpacity?: number
  pixelScale?: number
  className?: string
}

// Grid: 4×4, index = row * 4 + col (0-15)
export function PixelGrid({ 
  activePixels, 
  pixelOpacity = 1, 
  pixelScale = 1,
  className = "" 
}: PixelGridProps) {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: 16, height: 16 }}
    >
      <div 
        className="grid"
        style={{
          width: 16,
          height: 16,
          gridTemplateColumns: "repeat(4, 3px)",
          gridTemplateRows: "repeat(4, 3px)",
          gap: 1,
        }}
      >
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 3,
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: 0.5,
              opacity: activePixels.has(i) ? pixelOpacity : 0,
              transform: `scale(${pixelScale})`,
              transformOrigin: "center",
              transition: "opacity 150ms ease, transform 150ms ease",
            }}
          />
        ))}
      </div>
    </div>
  )
}
