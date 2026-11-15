import type { Dictionary } from "@/content/types";
import { ArrowUpIcon } from "./icons";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="no-print mt-16 border-t border-line pt-8 text-xs text-muted">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{dict.footer.note}</p>

        <div className="flex items-center gap-5">
          <p className="num">{dict.footer.rights}</p>
          <a
            href="#top"
            className="-mx-2 inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors hover:bg-accent-soft"
          >
            {dict.footer.backToTop}
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
