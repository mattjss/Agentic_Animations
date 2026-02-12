"use client"

import AnimationCard from "@/components/ui/AnimationCard"
import CreatePrototype from "@/components/loaders/CreatePrototype"
import Thinking from "@/components/loaders/Thinking"
import ReadingFile from "@/components/loaders/ReadingFile"
import ReadingInput from "@/components/loaders/ReadingInput"
import Frame from "@/components/loaders/Frame"
import Spiral from "@/components/loaders/Spiral"
import Scorners from "@/components/loaders/Scorners"
import Striangle from "@/components/loaders/Striangle"
import PlusRed from "@/components/loaders/PlusRed"
import WaveTB from "@/components/loaders/WaveTB"

const animations = [
  { icon: <CreatePrototype />, name: "Create Prototype" },
  { icon: <Thinking />, name: "Thinking" },
  { icon: <ReadingFile />, name: "Reading File" },
  { icon: <ReadingInput />, name: "Reading Input" },
  { icon: <Frame />, name: "Frame" },
  { icon: <Spiral />, name: "Spiral" },
  { icon: <Scorners />, name: "Scorners" },
  { icon: <Striangle />, name: "Striangle" },
  { icon: <PlusRed />, name: "PlusRed" },
  { icon: <WaveTB />, name: "Wave TB" },
]

export default function Home() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center bg-neutral-900 p-8 overflow-hidden">
      <div
        className="w-[5000px] h-[5000px] max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)] flex items-center justify-center flex-shrink-0 overflow-hidden min-w-0 min-h-0"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="flex items-center gap-4 flex-shrink-0" style={{ margin: 32 }}>
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
            {animations.map(({ icon, name }) => (
              <AnimationCard key={name} icon={icon} name={name} />
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
            {animations.map(({ icon, name }) => (
              <AnimationCard key={`${name}-2`} icon={icon} name={name} variant="light" />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
