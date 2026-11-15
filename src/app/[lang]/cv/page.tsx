import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "@/components/print-button";
import { isLocale, uiStrings, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const dict = getDictionary(locale);

  return {
    title: `${dict.hero.name} — CV`,
    description: dict.meta.description,
    robots: { index: false, follow: true },
  };
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const ui = uiStrings[locale];

  return (
    <main className="cv mx-auto w-full max-w-3xl px-6 py-10 leading-7 print:max-w-none print:px-0 print:py-0">
      <div className="no-print flex items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="-mx-2 rounded-full px-2 py-1 text-sm text-muted transition-colors hover:bg-accent-soft"
        >
          ← {ui.backToSite}
        </Link>
        <PrintButton label={ui.printCv} />
      </div>

      <header className="mt-10 border-b border-line pb-6 print:mt-0">
        <h1 className="display text-3xl print:text-2xl">{dict.hero.name}</h1>
        <p className="mt-1 text-muted">{dict.hero.role}</p>

        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <a
            href={`mailto:${dict.contact.email}`}
            className="num"
            dir="ltr"
          >
            {dict.contact.email}
          </a>
          {dict.contact.links.map((link) => (
            <span key={link.label} className="flex items-center gap-2">
              <span aria-hidden>·</span>
              <a href={link.href} className="rounded px-1 transition-colors hover:bg-accent-soft">
                {link.label}
              </a>
            </span>
          ))}
          <span aria-hidden>·</span>
          <span>{dict.hero.location}</span>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="eyebrow">{dict.about.label}</h2>
        <p className="mt-2 max-w-[70ch] text-sm">{dict.about.body[0]}</p>
      </section>

      <section className="mt-8">
        <h2 className="eyebrow">{dict.experience.label}</h2>
        <ol className="mt-3 space-y-6">
          {dict.experience.items.map((job, index) => (
            <li key={`${job.org}-${index}`} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {job.role}
                  <span className="font-normal text-muted"> · {job.org}</span>
                </h3>
                <p className="num text-sm text-muted">
                  {job.period} · {job.location}
                </p>
              </div>

              <p className="mt-1 text-sm text-muted">{job.summary}</p>

              <ul className="mt-2 list-disc space-y-1 ps-5 text-sm">
                {job.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 break-inside-avoid">
        <h2 className="eyebrow">{dict.skills.label}</h2>
        <dl className="mt-2 space-y-1.5 text-sm">
          {dict.skills.groups.map((group) => (
            <div key={group.title} className="flex flex-wrap gap-x-2">
              <dt className="font-medium">{group.title}:</dt>
              <dd className="text-muted">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

    </main>
  );
}
