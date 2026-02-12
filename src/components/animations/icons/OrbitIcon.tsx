"use client"

import { motion } from "framer-motion"

export default function OrbitIcon() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 12, height: 12 }}>
      <motion.div
        className="absolute"
        style={{
          width: 8,
          height: 8,
          left: "50%",
          top: "50%",
          marginLeft: -4,
          marginTop: -4,
          transformOrigin: "center",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div
          className="absolute rounded-full bg-white left-1/2 -translate-x-1/2"
          style={{
            width: 4,
            height: 4,
            top: 0,
            marginTop: -2,
          }}
        />
      </motion.div>
    </div>
  )
}
