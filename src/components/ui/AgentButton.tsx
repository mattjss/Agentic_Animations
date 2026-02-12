"use client"

import { ReactNode } from "react"

interface AgentButtonProps {
  icon: ReactNode
  label: string
  className?: string
}

export default function AgentButton({ icon, label, className = "" }: AgentButtonProps) {
  return (
    <div
      className={`flex items-center gap-2 min-w-fit ${className}`}
      style={{
        padding: "6px 14px 6px 10px",
        background: "rgba(0, 0, 0, 0.9)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: 16,
      }}
    >
      <div
        className="shrink-0 flex items-center justify-center"
        style={{ width: 12, height: 12 }}
      >
        {icon}
      </div>
      <span
        className="whitespace-nowrap"
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "white",
        }}
      >
        {label}
      </span>
    </div>
  )
}
