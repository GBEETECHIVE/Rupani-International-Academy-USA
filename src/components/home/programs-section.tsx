import Image from "next/image";
import Link from "next/link";

const programmes = [
  {
    abbreviation: "PYP",
    title: "Primary Years Programme",
    age: "Ages 3–12",
    description: "Inquiry begins with wonder.",
    image: "/images/students-learning.png",
    alt: "Young learners focused on a classroom activity",
  },
  {
    abbreviation: "MYP",
    title: "Middle Years Programme",
    age: "Ages 11–16",
    description: "Connect ideas to real life.",
    image: "/images/student-classroom.png",
    alt: "Students learning together in class",
  },
  {
    abbreviation: "DP",
    title: "Diploma Programme",
    age: "Ages 16–19",
    description: "Prepare for university and beyond.",
    image: "/images/dp-class.png",
    alt: "Students spending time together outdoors",
  },
];

export function ProgramsSection() {
  return (
    <>
      <section id="programmes" className="scroll-mt-8 px-6 py-14 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.8fr] lg:items-end">
          <div>
            <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#C79C47]">
              THE RUPANI EXPERIENCE
            </p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
             The IB Programmes
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#363636]">
              A continuum of internationally recognized programmes that develop curious, knowledgeable and caring young people who make a positive difference in their communities and the world.
            </p>
            <Link
              href="#learning"
              className="mt-5 inline-flex rounded-full border border-ink/20 px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              Discover the journey <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.abbreviation}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="relative h-36 sm:h-32 lg:h-36">
                  <Image
                    src={programme.image}
                    alt={programme.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 24vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-lg font-bold leading-none text-[#363636]">
                    {programme.abbreviation}
                  </p>
                  <h3 className="mt-2 text-sm font-bold leading-snug text-ink">
                    {programme.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#363636]">
                    {programme.age}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[#363636]">
                    {programme.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-ink px-6 py-5 text-white sm:px-10 lg:px-12">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["IB", "Authorized school"],
            ["500+", "Students"],
            ["60+", "Nationalities"],
            ["1:8", "Teacher–student ratio"],
            ["100%", "IB-aligned curriculum"],
            ["Houston", "A global learning hub"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-white/15 pl-4 first:border-0 first:pl-0">
              <dt className="font-display text-lg font-bold text-gold">{value}</dt>
              <dd className="mt-1 text-sm leading-5 text-white/70">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
