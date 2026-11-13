import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Our story", href: "#our-story" },
  { label: "Programmes", href: "#programmes" },
  { label: "Learning", href: "#learning" },
  { label: "Campus life", href: "#campus" },
  { label: "Our community", href: "#community" },
  { label: "Admissions", href: "#admissions" },
  { label: "News", href: "#stories" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-5 py-3 sm:px-8 lg:px-10">
        <Link href="#" aria-label="Rupani International Academy home" className="flex items-center gap-2.5">
          <span className="relative h-16 w-32 shrink-0">
            <Image
              src="/images/RDIlogo.png"
              alt="Rupani Development Initiatives"
              fill
              sizes="128px"
              className="object-contain"
            />
          </span>
          {/* <span className="font-display text-[13px] font-bold leading-[1.05] text-ink">
            Rupani
            <br />
            International
            <br />
            Academy
          </span> */}
        </Link>

        <div className="hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-wide text-ink/70 lg:flex">
          <span className="h-7 w-px bg-ink/15" />
          <p>
            The IB authorized school
            <br />
            Houston, USA
          </p>
        </div>

        <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-ink/45 xl:flex">
          <span>Parents</span>
          <span>Students</span>
          <span>Alumni</span>
          <span>Careers</span>
        </div>

        <Link
          href="#admissions"
          className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Apply now
        </Link>

        <nav
          aria-label="Main navigation"
          className="mt-3 flex w-full gap-5 overflow-x-auto border-t border-ink/10 pt-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink/75 sm:justify-center sm:gap-7"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="shrink-0 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
