/**
 * Shared Framer Motion configuration for Agentic Animations
 */

export const motionConfig = {
  // Common transition presets
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  tween: {
    type: "tween",
    ease: "easeInOut",
  },
  // Animation durations (in seconds)
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 2,
  },
} as const;
