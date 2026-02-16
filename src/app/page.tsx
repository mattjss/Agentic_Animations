"use client"

import AnimationCard from "@/components/ui/AnimationCard"
import UnicodeBrailleLoader from "@/components/loaders/UnicodeBrailleLoader"
import type { BrailleSpinnerName } from "unicode-animations"

const UNICODE_ANIMATIONS: { name: BrailleSpinnerName; state: string; animation: string }[] = [
  { name: "braille", state: "Loading", animation: "Braille" },
  { name: "braillewave", state: "Building", animation: "Braille Wave" },
  { name: "dna", state: "Analyzing", animation: "DNA" },
  { name: "scan", state: "Processing", animation: "Scan" },
  { name: "rain", state: "Fetching", animation: "Rain" },
  { name: "pulse", state: "Compiling", animation: "Pulse" },
  { name: "snake", state: "Executing", animation: "Snake" },
  { name: "sparkle", state: "Syncing", animation: "Sparkle" },
  { name: "orbit", state: "Streaming", animation: "Orbit" },
  { name: "breathe", state: "Complete", animation: "Breathe" },
]

const animations = UNICODE_ANIMATIONS.map(({ name, state, animation }) => ({
  icon: <UnicodeBrailleLoader name={name} />,
  state,
  animation,
}))

export default function Home() {
  return (
    <main className="w-screen h-screen min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden p-0 m-0">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: 10000,
          height: 10000,
          backgroundColor: "#000000",
          transform: "scale(calc(100vmin / 10000))",
          transformOrigin: "center center",
        }}
      >
        <div className="flex items-center gap-4 flex-shrink-0">
          <div
            className="flex flex-col gap-4 flex-shrink-0"
            style={{
              padding: 20,
              paddingRight: 64,
              backgroundColor: "#161616",
              border: "1px solid #242424",
              borderRadius: 16,
            }}
          >
            {animations.map(({ icon, state, animation }) => (
              <AnimationCard key={state} icon={icon} state={state} animation={animation} />
            ))}
          </div>
          <div
            className="flex flex-col gap-4 flex-shrink-0"
            style={{
              padding: 20,
              paddingRight: 64,
              backgroundColor: "#F5F5F5",
              border: "1px solid #E5E5E5",
              borderRadius: 16,
            }}
          >
            {animations.map(({ icon, state, animation }) => (
              <AnimationCard key={`${state}-2`} icon={icon} state={state} animation={animation} variant="light" />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
