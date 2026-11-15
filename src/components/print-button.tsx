"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-accent-strong"
    >
      {label}
    </button>
  );
}
