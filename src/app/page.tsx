"use client"

import AnimationCard from "@/components/ui/AnimationCard"
import Frame from "@/components/loaders/Frame"
import LTL from "@/components/loaders/LTL"
import WaveLR from "@/components/loaders/WaveLR"
import PlusRed from "@/components/loaders/PlusRed"
import Sparse from "@/components/loaders/Sparse"
import Scorners from "@/components/loaders/Scorners"
import LineMid from "@/components/loaders/LineMid"
import WaveTB from "@/components/loaders/WaveTB"
import Striangle from "@/components/loaders/Striangle"
import Spiral from "@/components/loaders/Spiral"

const animations = [
  { icon: <Frame />, state: "Loading", animation: "Frame" },
  { icon: <WaveTB />, state: "Building", animation: "Wave-TB" },
  { icon: <WaveLR />, state: "Analyzing", animation: "Wave-LR" },
  { icon: <LTL />, state: "Processing", animation: "L-TL" },
  { icon: <PlusRed />, state: "Fetching", animation: "Plus" },
  { icon: <Sparse />, state: "Compiling", animation: "Sparse" },
  { icon: <Scorners />, state: "Executing", animation: "Scorners" },
  { icon: <LineMid />, state: "Syncing", animation: "Line" },
  { icon: <Striangle />, state: "Streaming", animation: "Striangle" },
  { icon: <Spiral />, state: "Complete", animation: "Spiral" },
]

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
