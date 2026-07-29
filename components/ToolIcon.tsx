import type { CSSProperties } from "react";
import type { Tool } from "@/data/tools";

export function ToolIcon({ tool }: { tool: Tool }) {
  const angle = tool.group === "AI" ? 45 : tool.group === "Production" ? 135 : 0;

  return (
    <svg
      className="tool-icon"
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      style={{ "--tool-angle": `${angle}deg` } as CSSProperties}
    >
      <rect x="5" y="5" width="30" height="30" rx="10" />
      <path d="M13 25.5h14M13 20h14M13 14.5h14" />
      <circle cx="28" cy="12" r="2.5" />
      <text x="20" y="25" textAnchor="middle">
        {tool.short}
      </text>
    </svg>
  );
}
