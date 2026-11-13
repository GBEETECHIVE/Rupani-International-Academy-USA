import Image from "next/image";
import Link from "next/link";

const highlights = [
  "IB World School Authorized",
  "Diversity & Inclusion",
  "Inquiry-Based Learning",
  "Wellbeing & Belonging",
  "Leadership & Service",
  "Global Citizenship",
  "Campus Experience",
];

export function HeroSection() {
  return (
    <section className="bg-ink text-white">
      <div className="grid min-h-[440px] lg:grid-cols-[0.88fr_1.12fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            RUPANI ACADEMY HOUSTON
          </p>
          <h1 className="max-w-xl font-display text-4xl leading-[1.08] sm:text-5xl xl:text-[3.55rem]">
            Nurturing great minds for Houston and the world.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">Our ambition is to be the best place in Houston to nurture great minds and generous hearts: learners who think deeply, act with integrity, and contribute with compassion.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#programmes"
              className="rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore our approach <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#campus"
              className="rounded-full border border-white/50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Register your interest
            </Link>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]">
          <Image
            src="/images/students-campus.png"
            alt="Students sharing a moment together on campus"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white drop-shadow">
            A place to belong. A future to shape.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto px-5 pb-5 sm:px-8 lg:px-10">
        <ul className="mx-auto grid min-w-[700px] max-w-7xl grid-cols-7 gap-0 rounded-xl bg-white px-5 py-4 text-center text-base font-semibold text-ink">
          {highlights.map((highlight, index) => (
            <li
              key={highlight}
              className="flex min-h-12 flex-col items-center justify-center gap-1 border-r border-ink/10 px-2 last:border-r-0"
            >
              <span className="text-base leading-none text-gold" aria-hidden="true">
                {["IB", "◎", "✦", "♡", "☆", "◎","⌂"][index]}
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
