const PATHS = {
  right: "M2 8h12M9 3l5 5-5 5",
  down: "M3 6l5 5 5-5",
};

export function OraArrow({ dir = "right" }: { dir?: keyof typeof PATHS }) {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      viewBox="0 0 16 16"
    >
      <path d={PATHS[dir]} />
    </svg>
  );
}
