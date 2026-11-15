export function Section({
  id,
  number,
  heading,
  intro,
  children,
}: {
  id: string;
  number: string;
  heading: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-16 lg:mb-24">
      <header className="sticky top-0 z-20 -mx-6 mb-6 flex items-baseline gap-3 bg-paper/85 px-6 py-4 backdrop-blur-md lg:static lg:mx-0 lg:mb-6 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <span className="num eyebrow eyebrow-accent">{number}</span>
        <h2 className="display text-xl md:text-2xl">{heading}</h2>
      </header>

      {intro ? (
        <p className="mb-8 max-w-xl whitespace-pre-line leading-8 text-muted">{intro}</p>
      ) : null}

      {children}
    </section>
  );
}
