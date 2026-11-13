export function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      aria-label="Our mission and vision"
      className="bg-soft-blue px-6 py-14 sm:px-10 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        <article className="relative isolate overflow-hidden rounded-2xl border border-white/70 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 -z-10 size-40 rounded-full bg-soft-blue/70"
          />
          <span
            aria-hidden="true"
            className="mb-5 block h-1 w-12 rounded-full bg-gold"
          />
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Our Mission
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#363636]">
            To nurture knowledgeable, principled, and compassionate leaders
            who, through inquiry, reflection, and purposeful action, serve
            humanity and contribute meaningfully to Houston and the wider world.
          </p>
        </article>

        <article className="relative isolate overflow-hidden rounded-2xl border border-white/70 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 -z-10 size-40 rounded-full bg-[#C79C47]/10"
          />
          <span
            aria-hidden="true"
            className="mb-5 block h-1 w-12 rounded-full bg-gold"
          />
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Our Vision
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#363636]">
            To become Houston&apos;s best place to nurture great minds and
            generous hearts, and to help shape an educated, compassionate, and
            pluralistic society. We envision young people who are confident in
            their identities, open to diverse perspectives, and prepared to
            improve the communities they call home as responsible citizens of a
            connected world.
          </p>
        </article>
      </div>
    </section>
  );
}
