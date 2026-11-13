import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    category: "Student voices",
    title: "Learning through curiosity and collaboration",
    image: "/images/student-voices.png",
    alt: "Students spending time together on campus",
  },
  {
    category: "Campus life",
    title: "Celebrating cultures, creativity and sport",
    image: "/images/school-campus.png",
    alt: "The school campus surrounded by greenery",
  },
  {
    category: "Academic excellence",
    title: "Research, projects and student achievement",
    image: "/images/school-event.jpg",
    alt: "A busy community gathering in a bright event space",
  },
];

export function StoriesSection() {
  return (
    <section id="stories" className="scroll-mt-8 bg-white px-6 py-14 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#C79C47]">
          From our community
        </p>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Stories, Ideas & Achievements
        </h2>
        <p className="mt-2 max-w-2xl text-xs leading-5 text-ink/60">
          Discover the moments, milestones and perspectives that make life at
          Rupani distinctive.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.category}
              className="overflow-hidden rounded-xl bg-paper"
            >
              <div className="relative h-44">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {story.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                  {story.title}
                </h3>
                <Link
                  href="#admissions"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Read story <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
