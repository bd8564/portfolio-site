import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { localeLabel, locales, uiStrings, type Locale } from "@/i18n/config";

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div
      role="group"
      aria-label={uiStrings[locale].language}
      className="flex shrink-0 items-center rounded-full border border-line bg-surface p-0.5"
    >
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}`}
            hrefLang={item}
            lang={item}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
              active ? "bg-accent text-paper" : "text-muted hover:text-ink"
            }`}
          >
            {localeLabel[item]}
          </Link>
        );
      })}
    </div>
  );
}

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header
      id="top"
      className="no-print sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="truncate text-[0.95rem] font-semibold tracking-tight"
          >
            {dict.hero.name}
          </Link>

          <nav
            aria-label={uiStrings[locale].sections}
            className="hidden items-center gap-1 md:flex"
          >
            {dict.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher locale={locale} />
        </div>

        <nav
          aria-label={uiStrings[locale].sections}
          className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
        >
          {dict.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full px-3 py-1 text-xs text-muted transition-colors hover:bg-accent-soft hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
