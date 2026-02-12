"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerTextProps {
  children: string
  className?: string
  /** Total duration of one full sweep across all characters in seconds */
  duration?: number
}

export function ShimmerText({ children, className, duration = 2.4 }: ShimmerTextProps) {
  return (
    <span className={cn("relative inline-block select-none", className)} aria-label={children}>
      <motion.span
        className="inline-block"
        style={{
          background: "linear-gradient(90deg, hsl(0 0% 38%) 0%, hsl(0 0% 72%) 50%, hsl(0 0% 38%) 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}
