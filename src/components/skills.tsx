import type { Dictionary } from "@/content/types";
import { Section } from "./section";

export function Skills({ dict, number }: { dict: Dictionary; number: string }) {
  const { skills } = dict;

  return (
    <Section
      id="skills"
      number={number}
      heading={skills.heading}
      intro={skills.intro}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
        {skills.groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold">{group.title}</h3>

            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-6 text-ink/80"
                >
                  <span
                    aria-hidden
                    className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
