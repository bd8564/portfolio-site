import type { Dictionary } from "@/content/types";
import { Section } from "./section";

export function Experience({ dict, number }: { dict: Dictionary; number: string }) {
  const { experience } = dict;

  return (
    <Section
      id="experience"
      number={number}
      heading={experience.heading}
      intro={experience.intro}
    >
      <ol className="-mx-4 space-y-2">
        {experience.items.map((job, index) => (
          <li
            key={`${job.org}-${index}`}
            className="group grid gap-3 rounded-xl px-4 py-5 transition-all duration-200 hover:bg-accent-soft hover:shadow-[0_18px_40px_-30px_rgba(21,35,28,0.55)] lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-6"
          >
            <p className="num text-xs leading-6 text-muted lg:pt-1">{job.period}</p>

            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-7">
                {job.role}
                <span className="font-normal text-muted"> · {job.org}</span>
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-muted">{job.summary}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex gap-3 text-[0.95rem] leading-7 text-ink/85"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent/50 transition-colors group-hover:bg-accent"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {job.tags.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
