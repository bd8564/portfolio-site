import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ContactMethods } from "@/components/contact-methods";
import { Experience } from "@/components/experience";
import { Samples } from "@/components/samples";
import { Sidebar } from "@/components/sidebar";
import { SiteFooter } from "@/components/site-footer";
import { Skills } from "@/components/skills";
import { isLocale, uiStrings, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { sectionNumber } from "@/lib/numbers";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const number = (index: number) => sectionNumber(index, locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {uiStrings[locale].skipToContent}
      </a>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 lg:flex-row lg:justify-between lg:gap-16 lg:px-10">
        <Sidebar locale={locale} dict={dict} />

        <main id="main" className="flex-1 pb-16 lg:w-[54%] lg:py-20 lg:pb-24">
          <About dict={dict} number={number(1)} />
          <Experience dict={dict} number={number(2)} />
          <Skills dict={dict} number={number(3)} />
          <Contact dict={dict} number={number(4)} />
          <Samples dict={dict} number={number(5)} />
          <ContactMethods dict={dict} number={number(6)} />
          <SiteFooter dict={dict} />
        </main>
      </div>
    </>
  );
}
