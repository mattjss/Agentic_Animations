"use client"

import { motion } from "framer-motion"

const delays = [0, 0.2, 0.4]

export default function DotsIcon() {
  return (
    <div className="flex items-center gap-[2px]">
      {delays.map((delay, i) => (
        <motion.div
          key={i}
          className="rounded-full bg-white flex-shrink-0"
          style={{ width: 3, height: 3 }}
          animate={{ y: [-3, 0, -3] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay,
          }}
        />
      ))}
    </div>
  )
}
