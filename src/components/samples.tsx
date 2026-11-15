import type { Dictionary } from "@/content/types";
import { Section } from "./section";

export function Samples({ dict, number }: { dict: Dictionary; number: string }) {
  const { samples } = dict;

  return (
    <Section
      id="samples"
      number={number}
      heading={samples.heading}
      intro={samples.intro || undefined}
    >
      {samples.items.length === 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className="h-36 rounded-xl border border-dashed border-line bg-surface"
            />
          ))}
        </ul>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {samples.items.map((item, index) => {
            const inner = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow">{item.kind}</span>
                </div>

                <h3 className="mt-4 flex items-start gap-1.5 text-base font-semibold">
                  <span>{item.title}</span>
                  {item.href ? (
                    <span
                      aria-hidden
                      className="text-muted transition-all group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  ) : null}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </>
            );

            const card =
              "flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-all duration-200 hover:bg-accent-soft";

            return (
              <li key={`${item.title}-${index}`} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group ${card} hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-30px_rgba(21,35,28,0.55)]`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`group ${card} hover:-translate-y-1 hover:border-accent/40`}>
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
