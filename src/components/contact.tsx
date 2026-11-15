import type { Dictionary } from "@/content/types";
import { Section } from "./section";

export function Contact({ dict, number }: { dict: Dictionary; number: string }) {
  const { contact } = dict;

  return (
    <Section
      id="contact"
      number={number}
      heading={contact.heading}
      intro={contact.body}
    >
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
        {contact.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="-mx-1 rounded px-1 text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:bg-accent-soft"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
