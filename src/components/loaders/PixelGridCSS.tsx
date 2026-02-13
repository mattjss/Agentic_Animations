"use client"

/** Shared 4×4 pixel grid for CSS-driven animations. Uses currentColor and var(--pixel-active). */
export default function PixelGridCSS({ variant }: { variant: string }) {
  return (
    <div
      className={`pixel-loader pixel-loader--${variant}`}
      style={{ color: "var(--pixel-active, #F5E6D3)" }}
    >
      {Array.from({ length: 16 }, (_, i) => (
        <div key={i} className={`pixel pixel-${i}`} />
      ))}
    </div>
  )
}
