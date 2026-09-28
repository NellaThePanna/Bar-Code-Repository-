import type { ReactNode } from "react";

export function OraPlate({
  fig,
  children,
  note = "Placeholder",
  tone = "light",
}: {
  fig: string;
  children: ReactNode;
  note?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`ora-mono mt-3 pt-3 flex justify-between gap-4 border-t ${
        dark ? "border-white/14 text-(--cream-deep)/80" : "border-(--burgundy-ink)/18 text-(--burgundy-light)"
      }`}
    >
      <p>
        <span className={dark ? "text-(--cream-deep)" : "text-(--burgundy-ink)"}>Fig. {fig}</span> — {children}
      </p>
      <p className="shrink-0 text-right">{note}</p>
    </div>
  );
}
