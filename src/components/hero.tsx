import type { Dictionary } from "@/content/types";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, contact } = dict;

  return (
    <section className="hero-wash mx-auto w-full max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="rise flex items-center gap-2.5">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        <span className="eyebrow">{hero.status}</span>
      </div>

      <p className="eyebrow mt-10">{hero.greeting}</p>

      <h1 className="display rise rise-1 mt-3 text-[clamp(2.5rem,7.5vw,4.75rem)]">
        {hero.name}
      </h1>

      <p className="rise rise-2 mt-5 text-lg text-muted md:text-xl">{hero.role}</p>

      <p className="rise rise-3 mt-7 max-w-2xl text-base leading-8 text-ink/75 md:text-[1.0625rem]">
        {hero.tagline}
      </p>

      <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
        >
          {hero.ctaPrimary}
        </a>
        <a
          href={hero.ctaSecondaryHref}
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink/25"
        >
          {hero.ctaSecondary}
        </a>
      </div>

      <p className="mt-12 text-sm text-muted">{hero.location}</p>
    </section>
  );
}
