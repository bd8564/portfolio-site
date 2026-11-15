export const locales = ["en", "fa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Direction of the document for a given locale. */
export function directionOf(locale: Locale): "ltr" | "rtl" {
  return locale === "fa" ? "rtl" : "ltr";
}

/** The locale to switch to from the current one. */
export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "fa" : "en";
}

/** Language label as shown inside the switcher itself. */
export const localeLabel: Record<Locale, string> = {
  en: "English",
  fa: "Persian",
};

/** Small interface strings that are not part of the page content. */
export const uiStrings: Record<
  Locale,
  {
    skipToContent: string;
    sections: string;
    language: string;
    backToSite: string;
    printCv: string;
  }
> = {
  en: {
    skipToContent: "Skip to content",
    sections: "Sections",
    language: "Language",
    backToSite: "Back to site",
    printCv: "Print / Save as PDF",
  },
  fa: {
    skipToContent: "رفتن به محتوا",
    sections: "بخش‌ها",
    language: "زبان",
    backToSite: "بازگشت به سایت",
    printCv: "چاپ / ذخیرهٔ PDF",
  },
};

export const localeName: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
};
