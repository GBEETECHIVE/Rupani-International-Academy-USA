import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="campus"
      className="scroll-mt-8 bg-paper px-6 py-12 sm:px-10 lg:px-12"
    >
      <div id="our-story" className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.95fr] lg:items-stretch">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-[#C79C47]">
              About
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
              Rupani Academy Houston
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-[1.65] text-[#363636]">
              <p>
                Rupani Academy Houston stems from Rupani Development
                Initiatives&apos; belief that every child deserves the chance
                to explore their potential and contribute to the world. This
                vision thrives in Rupani Academies worldwide and now extends to
                Houston with a planned Grade 1-12 school.
              </p>
              <p>
                Education here is a transformative journey awakening human
                agency. Students gain knowledge and learn to ask insightful
                questions, challenge assumptions, listen to diverse views, make
                thoughtful choices, and act purposefully. Intellectual growth
                intertwines with character, identity, and responsibility,
                empowering students to shape their lives and support others.
              </p>
              <p>
                This mission builds a brain economy shared human capacities for
                imagination, creation, adaptation, and growth. It relies on
                intellectual capital (knowledge, inquiry, creativity), cultural
                capital (identity, curiosity, respect), and spiritual capital
                (purpose, ethics, compassion). These culminate in global
                citizenship, recognizing interdependence and contributing
                locally and globally.
              </p>
              <p>
                Houston’s diverse history and culture inspire students to be
                grounded, open, and community-focused. The planned PYP, MYP, and
                DP programs align with IB philosophy, emphasizing inquiry,
                reflection, international-mindedness, and meaningful action at
                learning’s core.
              </p>
            </div>
          </div>

          <figure className="relative min-h-64 w-full overflow-hidden rounded-xl">
            <Image
              src="/images/15778bcfb02aec8153c630753b58b80e98bd82d4.png"
              alt="Rupani Academy campus surrounded by mature trees and gardens"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
