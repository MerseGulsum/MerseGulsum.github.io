export type Tool = {
  name: string;
  short: string;
  group: "Design" | "Production" | "AI";
};

export const tools: Tool[] = [
  { name: "Figma", short: "Fi", group: "Design" },
  { name: "Adobe XD", short: "Xd", group: "Design" },
  { name: "Adobe Photoshop", short: "Ps", group: "Design" },
  { name: "Adobe Illustrator", short: "Ai", group: "Design" },
  { name: "Adobe After Effects", short: "Ae", group: "Production" },
  { name: "Adobe Premiere Pro", short: "Pr", group: "Production" },
  { name: "Codex", short: "Cx", group: "AI" },
  { name: "Framer", short: "Fr", group: "Production" },
  { name: "Spline", short: "Sp", group: "Production" },
  { name: "Blender", short: "Bl", group: "Production" },
  { name: "VS Code", short: "Vs", group: "Production" },
  { name: "Notion", short: "No", group: "Production" },
  { name: "FigJam", short: "Fj", group: "Design" },
  { name: "ChatGPT", short: "Gp", group: "AI" },
  { name: "Claude", short: "Cl", group: "AI" },
  { name: "Gemini", short: "Ge", group: "AI" },
  { name: "Midjourney", short: "Mj", group: "AI" }
];

export function getTool(name: string) {
  return tools.find((tool) => tool.name === name);
}
