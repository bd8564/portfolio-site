import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-[clamp(2rem,6vw,3.5rem)]">
        Page not found
      </h1>
      <p className="mt-3 text-muted" dir="rtl" lang="fa">
        صفحهٔ مورد نظر پیدا نشد.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/en"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
        >
          English home
        </Link>
        <Link
          href="/fa"
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/40 hover:bg-accent-soft"
        >
          صفحهٔ اصلی فارسی
        </Link>
      </div>
    </main>
  );
}
