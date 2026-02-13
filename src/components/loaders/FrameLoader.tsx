"use client"

import { useEffect, useState } from "react"

/** 3 pixels moving clockwise: top → right → bottom → left → top */
const EDGE = [
  0, 1, 2, 3,   // top
  7, 11, 15,    // right
  14, 13, 12,   // bottom
  8, 4, 0,      // left (back to top)
]

const FRAMES: number[][] = []
for (let i = 0; i < EDGE.length; i++) {
  const a = EDGE[i]
  const b = EDGE[(i + 1) % EDGE.length]
  const c = EDGE[(i + 2) % EDGE.length]
  FRAMES.push([a, b, c])
}

const ACTIVE_COLOR = "#F5E6D3"
const INACTIVE_COLOR = "#1a1a1a"
const GRID_POSITIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function FrameLoader() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 250)
    return () => clearInterval(id)
  }, [])

  const activePixels = FRAMES[frame]

  return (
    <div
      className="flex-shrink-0"
      style={{
        width: 16,
        height: 16,
        display: "grid",
        gridTemplateColumns: "repeat(4, 3px)",
        gridTemplateRows: "repeat(4, 3px)",
        gap: 1,
      }}
    >
      {GRID_POSITIONS.map((pos) => {
        const isActive = activePixels.includes(pos)
        return (
          <div
            key={pos}
            style={{
              width: 3,
              height: 3,
              backgroundColor: isActive ? ACTIVE_COLOR : INACTIVE_COLOR,
              borderRadius: 0,
              boxShadow: "none",
              transition: "background-color 250ms ease-in-out",
            }}
          />
        )
      })}
    </div>
  )
}
