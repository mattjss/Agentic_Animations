"use client";

import { ReactNode } from "react";

interface AnimationCardProps {
  icon?: ReactNode;
  name: string;
  variant?: "dark" | "light";
}

export default function AnimationCard({ icon, name, variant = "dark" }: AnimationCardProps) {
  const isLight = variant === "light";

  const shimmerGradient = isLight
    ? "linear-gradient(90deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.35) 60%, rgba(0, 0, 0, 0.35) 100%)"
    : "linear-gradient(90deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.35) 40%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.35) 60%, rgba(255, 255, 255, 0.35) 100%)";

  return (
    <div
      className="flex items-center h-4 px-3"
      style={isLight ? { color: "#1a1a1a" } : undefined}
    >
      <div
        className="shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          width: 16,
          height: 16,
          filter: isLight ? "invert(1)" : undefined,
        }}
      >
        {icon}
      </div>

      <div className="flex items-center gap-2.5 ml-4">
        <span
          className="text-xs shrink-0"
          style={{
            background: shimmerGradient,
            backgroundSize: "200% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            animation: "shimmer 3.5s linear infinite",
          }}
        >
          Agent Thinking
        </span>

        <span
          className="text-xs whitespace-nowrap"
          style={{ color: isLight ? "#3a3a3a" : "#C6C6C6" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
