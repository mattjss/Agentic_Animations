"use client"

import { useEffect, useRef, useCallback } from "react"

interface PixelCanvasProps {
  /** Function that returns pixel opacity (0-1) for a given cell at a given time */
  getPixel: (x: number, y: number, t: number) => number
  /** Grid size (default 8) */
  size?: number
  /** CSS display size in px (default 20) */
  canvasSize?: number
  /** Frames per second */
  fps?: number
}

export function PixelCanvas({
  getPixel,
  size = 8,
  canvasSize = 20,
  fps = 10,
}: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeRef = useRef(0)

  // Render at 3x for crisp retina dots
  const scale = 3
  const internal = canvasSize * scale

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const cellSize = internal / size
    const dotRadius = cellSize * 0.32

    ctx.clearRect(0, 0, internal, internal)

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const opacity = getPixel(x, y, timeRef.current)
        if (opacity > 0.01) {
          ctx.beginPath()
          ctx.arc(
            x * cellSize + cellSize / 2,
            y * cellSize + cellSize / 2,
            dotRadius,
            0,
            Math.PI * 2
          )
          ctx.fillStyle = `rgba(255,255,255,${opacity})`
          ctx.fill()
        }
      }
    }

    timeRef.current++
  }, [getPixel, size, internal])

  useEffect(() => {
    draw()
    const interval = setInterval(draw, 1000 / fps)
    return () => clearInterval(interval)
  }, [draw, fps])

  return (
    <canvas
      ref={canvasRef}
      width={internal}
      height={internal}
      className="block"
      style={{
        width: canvasSize,
        height: canvasSize,
      }}
      aria-hidden="true"
    />
  )
}
