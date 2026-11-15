import type { Dictionary } from "@/content/types";
import { CheckIcon } from "./icons";
import { Section } from "./section";

export function About({ dict, number }: { dict: Dictionary; number: string }) {
  const { about } = dict;

  return (
    <Section id="about" number={number} heading={about.heading}>
      <div className="space-y-5">
        {about.body.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "max-w-[62ch] text-lg leading-8 text-ink/85"
                : "max-w-[62ch] leading-8 text-muted"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
        {about.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-2 text-sm">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <h3 className="eyebrow">{about.interests.label}</h3>

        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {about.interests.groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold">{group.title}</h4>
              <ul className="mt-2 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink/80"
                  >
                    <CheckIcon className="size-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
