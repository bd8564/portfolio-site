import { en } from "@/content/en";
import { fa } from "@/content/fa";
import type { Dictionary } from "@/content/types";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, fa };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
