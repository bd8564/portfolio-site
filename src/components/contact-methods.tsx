import type { Dictionary } from "@/content/types";
import {
  InstagramIcon,
  LinkIcon,
  RubikaIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./icons";
import { Section } from "./section";

function iconFor(href: string) {
  if (href.includes("t.me") || href.includes("telegram")) {
    return <TelegramIcon className="size-5" />;
  }
  if (href.includes("wa.me") || href.includes("whatsapp")) {
    return <WhatsAppIcon className="size-5" />;
  }
  if (href.includes("instagram")) {
    return <InstagramIcon className="size-5" />;
  }
  if (href.includes("rubika")) {
    return <RubikaIcon className="size-5" />;
  }

  return <LinkIcon className="size-5" />;
}

export function ContactMethods({
  dict,
  number,
}: {
  dict: Dictionary;
  number: string;
}) {
  const { contactMethods } = dict;

  return (
    <Section id="contact-methods" number={number} heading={contactMethods.heading}>
      <p className="max-w-xl whitespace-pre-line leading-8 text-muted">
        {contactMethods.body}
      </p>

      <ul className="mt-8 flex flex-wrap items-center gap-3">
        {contactMethods.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:bg-accent-soft"
            >
              {iconFor(link.href)}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
