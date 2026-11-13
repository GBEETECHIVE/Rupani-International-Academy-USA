import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "About",
    links: ["Our story", "Our values", "Our campus", "Our community"],
  },
  {
    title: "Programmes",
    links: [
      "Primary Years Programme",
      "Middle Years Programme",
      "Diploma Programme",
      "The IB advantage",
    ],
  },
  {
    title: "Learning",
    links: [
      "Academic excellence",
      "Wellbeing & belonging",
      "Leadership & service",
      "Service learning",
    ],
  },
  {
    title: "Admissions",
    links: ["How to apply", "Tuition & financial aid", "Visit us", "FAQs"],
  },
];

export function SiteFooter() {
  return (
    <footer id="admissions" className="scroll-mt-8 bg-ink text-white">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
          <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#C79C47]">
            Admissions
          </p>
          <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
            Your Future Starts Here.
          </h2>
          <p className="mt-3 max-w-lg text-xs leading-5 text-white/70">
            Discover an inclusive IB learning community in Houston. Connect
            with our admissions team and plan your campus visit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Apply now <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/50 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule a visit
            </Link>
          </div>
        </div>
        <div className="relative min-h-64 lg:min-h-[330px]">
          <Image
            src="/images/city-sunset.png"
            alt="A city skyline in the evening light"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>

      <div aria-hidden="true" className="h-10 bg-white sm:h-12" />

      <div className="px-6 pb-8 pt-10 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_3fr]">
          <Link
            href="#"
            aria-label="Rupani International Academy home"
            className="flex h-fit items-center gap-3"
          >
            <span className="relative h-16 w-32 shrink-0 overflow-hidden rounded-md bg-white p-1">
              <Image
                src="/images/RDIlogo.png"
                alt="Rupani Development Initiatives"
                fill
                sizes="128px"
                className="object-contain p-1"
              />
            </span>
            {/* <span className="font-display text-sm font-bold leading-tight">
              Rupani
              <br />
              International Academy
              <span className="mt-1 block font-sans text-[8px] font-medium uppercase tracking-[0.12em] text-gold">
                Houston, Texas, USA
              </span>
            </span> */}
          </Link>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-[9px] font-bold uppercase tracking-[0.14em] text-gold">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={
                          group.title === "Programmes"
                            ? "#programmes"
                            : group.title === "Learning"
                              ? "#learning"
                              : group.title === "Admissions"
                                ? "#contact"
                                : "#our-story"
                        }
                        className="text-sm leading-5 text-white/70 transition-colors hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          id="contact"
          className="mx-auto mt-10 grid max-w-7xl gap-6 border-t border-white/15 py-6 sm:grid-cols-2"
        >
          <div>
            <h3 className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-gold">
              Contact
            </h3>
            <p className="text-[10px] leading-4 text-white/70">
              Houston, Texas, USA
              <br />
              Admissions enquiries welcome
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-gold">
              Follow our community
            </h3>
            <p className="text-[10px] text-white/70">
              Instagram <span className="mx-1.5 text-white/30">·</span> LinkedIn{" "}
              <span className="mx-1.5 text-white/30">·</span> YouTube{" "}
              <span className="mx-1.5 text-white/30">·</span> Facebook
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-[9px] text-white/50 sm:flex-row sm:justify-between">
          <p>© 2026 Rupani International Academy, USA</p>
          <p>Privacy policy <span className="mx-1.5">|</span> Terms of use</p>
        </div>
      </div>
    </footer>
  );
}
