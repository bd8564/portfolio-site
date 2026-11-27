"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";
import { localeLabel, locales, uiStrings, type Locale } from "@/i18n/config";
import { sectionNumber } from "@/lib/numbers";
import { GitHubIcon, LinkedInIcon, LinkIcon, MailIcon, XIcon } from "./icons";

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div
      role="group"
      aria-label={uiStrings[locale].language}
      className="inline-flex w-fit shrink-0 items-center rounded-full border border-line bg-surface p-0.5"
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
              active
                ? "bg-accent text-paper hover:bg-accent-strong"
                : "text-muted hover:bg-accent-soft"
            }`}
          >
            {localeLabel[item]}
          </Link>
        );
      })}
    </div>
  );
}

function socialIcon(href: string) {
  if (href.includes("github")) return <GitHubIcon className="size-[1.15rem]" />;
  if (href.includes("linkedin")) return <LinkedInIcon className="size-[1.15rem]" />;
  if (href.includes("x.com") || href.includes("twitter")) {
    return <XIcon className="size-[1.15rem]" />;
  }

  return <LinkIcon className="size-[1.15rem]" />;
}

export function Sidebar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [active, setActive] = useState("");
  const ui = uiStrings[locale];
  const { hero, nav, contact } = dict;

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [nav]);

  const iconLink =
    "flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:bg-accent-soft";

  return (
    <header
      id="top"
      className="pt-16 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:w-[42%] lg:flex-col lg:justify-between lg:gap-6 lg:overflow-y-auto lg:py-10 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden"
    >
      <div>
        <p className="eyebrow">{hero.greeting}</p>

        <h1 className="display mt-4 text-[2.25rem] leading-[1.05] text-accent-strong sm:text-[2.5rem]">
          <a href={`/${locale}`} className="-mx-1 rounded-md px-1 transition-colors hover:bg-accent-soft">
            {hero.name}
          </a>
        </h1>

        <p className="mt-3 text-lg font-medium text-accent">{hero.role}</p>

        <p className="mt-4 max-w-sm leading-7 text-muted">{hero.tagline}</p>

        {/* Desktop: numbered vertical nav, like a table of contents. */}
        <nav aria-label={ui.sections} className="mt-8 hidden lg:block">
          <ul className="space-y-0.5">
            {nav.map((item, index) => {
              const isActive = active === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group -mx-2 inline-flex w-[11.5rem] items-center gap-2.5 whitespace-nowrap rounded-full px-2.5 py-1 transition-all duration-200 ease-out hover:scale-[1.04] hover:bg-accent-soft hover:shadow-[0_6px_18px_-12px_rgba(21,35,28,0.45)]"
                  >
                    <span
                      className={`num text-xs ${
                        isActive ? "text-accent" : "text-muted"
                      }`}
                    >
                      {sectionNumber(index + 1, locale)}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-accent" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile: compact pill nav. */}
        <nav aria-label={ui.sections} className="mt-8 flex flex-wrap gap-2 lg:hidden">
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-all duration-200 ease-out hover:scale-105 hover:border-accent/40 hover:bg-accent-soft hover:shadow-[0_6px_18px_-12px_rgba(21,35,28,0.45)]"
            >
              <span className="num text-[0.65rem] text-accent">
                {sectionNumber(index + 1, locale)}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-6 flex flex-col gap-5 pb-10 lg:mt-0 lg:pb-0">
        <LanguageSwitcher locale={locale} />

        <ul className="flex items-center gap-3">
          <li>
            <a href={`mailto:${contact.email}`} aria-label={contact.email} className={iconLink}>
              <MailIcon className="size-[1.15rem]" />
            </a>
          </li>

          {contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className={iconLink}
              >
                {socialIcon(link.href)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
