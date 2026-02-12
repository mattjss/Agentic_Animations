"use client"

import { patterns } from "@/lib/pixel-patterns"
import { PatternCard } from "./pattern-card"

export function PatternGrid() {
  return (
    <div className="flex flex-col">
      {patterns.map((p) => (
        <PatternCard key={p.id} pattern={p} />
      ))}
    </div>
  )
}
