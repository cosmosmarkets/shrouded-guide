export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tiers"; items: { title: string; body: string }[] }
  | { type: "table"; headers: [string, string]; rows: [string, string][] }
  | { type: "callout"; variant: "discord" | "info" | "warning"; title?: string; text: string }
  | { type: "checklist"; items: string[] };

export type GuideChapter = {
  id: string;
  title: string;
  shortTitle: string;
  blocks: GuideBlock[];
};

export type GuideMeta = {
  path: "/developer" | "/recruiter";
  title: string;
  subtitle: string;
  chapters: GuideChapter[];
};
