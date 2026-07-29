import { getTool } from "@/data/tools";

type LogoProps = {
  label: string;
};

const displayNames: Record<string, string> = {
  "Adobe Photoshop": "Photoshop",
  "Adobe XD": "Adobe XD",
  "Adobe Illustrator": "Illustrator",
  "Adobe After Effects": "After Effects",
  "Adobe Premiere Pro": "Premiere Pro"
};

function FigmaLogo() {
  return (
    <>
      <circle cx="12" cy="8" r="4" />
      <circle cx="20" cy="8" r="4" />
      <circle cx="12" cy="16" r="4" />
      <circle cx="20" cy="16" r="4" />
      <circle cx="12" cy="24" r="4" />
    </>
  );
}

function FigJamLogo() {
  return (
    <>
      <circle cx="16" cy="16" r="9" />
      <rect x="15" y="9" width="2" height="14" rx="1" />
      <rect x="9" y="15" width="14" height="2" rx="1" />
    </>
  );
}

function AdobeLogo({ label }: LogoProps) {
  return (
    <>
      <rect x="5" y="5" width="22" height="22" rx="5" />
      <text x="16" y="20" textAnchor="middle">
        {label}
      </text>
    </>
  );
}

function CodexLogo() {
  return (
    <>
      <path d="M10 8 4 16l6 8 2.4-2L8.1 16l4.3-6z" />
      <path d="M22 8l-2.4 2 4.3 6-4.3 6 2.4 2 6-8z" />
      <path d="M17.5 7h3l-6 18h-3z" />
    </>
  );
}

function ChatGPTLogo() {
  return (
    <>
      <path d="M16 6.5a5 5 0 0 1 7.1 3.8 5 5 0 0 1 1 9 5 5 0 0 1-6.1 6.1 5 5 0 0 1-8.1-2.3 5 5 0 0 1-1-9A5 5 0 0 1 16 6.5Z" />
      <path d="M11 13.5l5-3 5 3v5l-5 3-5-3v-5Z" />
    </>
  );
}

function BlenderLogo() {
  return (
    <>
      <path d="M7 12h10l-4-4h6l8 7-8 7H9l5-5H7z" />
      <circle cx="19" cy="17" r="3" />
    </>
  );
}

function GeminiLogo() {
  return <path d="M16 4c1.4 6.2 5.8 10.6 12 12-6.2 1.4-10.6 5.8-12 12-1.4-6.2-5.8-10.6-12-12 6.2-1.4 10.6-5.8 12-12Z" />;
}

function DefaultLogo() {
  return (
    <>
      <rect x="7" y="7" width="18" height="18" rx="5" />
      <rect x="11" y="15" width="10" height="2" rx="1" />
    </>
  );
}

function ToolLogo({ name }: { name: string }) {
  if (name === "Figma") return <FigmaLogo />;
  if (name === "FigJam") return <FigJamLogo />;
  if (name === "Adobe XD") return <AdobeLogo label="Xd" />;
  if (name === "Adobe Photoshop") return <AdobeLogo label="Ps" />;
  if (name === "Adobe Illustrator") return <AdobeLogo label="Ai" />;
  if (name === "Adobe After Effects") return <AdobeLogo label="Ae" />;
  if (name === "Adobe Premiere Pro") return <AdobeLogo label="Pr" />;
  if (name === "Codex") return <CodexLogo />;
  if (name === "ChatGPT") return <ChatGPTLogo />;
  if (name === "Blender") return <BlenderLogo />;
  if (name === "Gemini") return <GeminiLogo />;
  return <DefaultLogo />;
}

export function ToolMark({ name }: { name: string }) {
  const tool = getTool(name);
  const label = displayNames[tool?.name ?? name] ?? tool?.name ?? name;

  return (
    <span className="tool-mark" aria-label={name} title={name}>
      <svg className="tool-mark__logo" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <ToolLogo name={tool?.name ?? name} />
      </svg>
      <span className="tool-mark__name">{label}</span>
    </span>
  );
}
