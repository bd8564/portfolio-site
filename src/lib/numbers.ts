const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Two-digit section number, with Persian digits on the Persian site. */
export function sectionNumber(value: number, locale: "fa" | "en"): string {
  const padded = String(value).padStart(2, "0");

  return locale === "fa"
    ? padded.replace(/\d/g, (digit) => persianDigits[Number(digit)])
    : padded;
}
