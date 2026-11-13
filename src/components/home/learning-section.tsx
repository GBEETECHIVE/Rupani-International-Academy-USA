const learningPrinciples = [
  {
    number: "01",
    title: "Inquire and discover",
    description:
      "Students ask meaningful questions, connect ideas across subjects, and build deep understanding of the world around them.",
  },
  {
    number: "02",
    title: "Think, reflect, and grow",
    description: "Students develop as knowledgeable thinkers and communicators; principled, open-minded, caring, balanced, and reflective learners.",
  },
  {
    number: "03",
    title: "Learn, act, and contribute",
    description: "Students connect classroom learning to life in Houston and beyond, turning knowledge into thoughtful action and service.",
  },
  {
    number: "04",
    title: "A school community built together",
    description: "We believe education is strongest when students, families, educators, and the wider community learn and work together. At Rupani Academy Houston, we aim to prepare young people for higher education and meaningful work and to help them become thoughtful, caring contributors wherever life takes them.",
  },
];

export function LearningSection() {
  return (
    <section
      id="learning"
      className="scroll-mt-8 bg-paper px-6 pb-16 pt-8 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
          An IB-inspired way of learning
        </p> */}
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          An IB-inspired way of learning
        </h2>
        <p className="mt-2 max-w-2xl text-xs leading-5 text-ink/60">
          An inquiry-led approach connects strong academic foundations with the
          capabilities students need to thrive in a changing world.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {learningPrinciples.map((principle) => (
            <article
              key={principle.number}
              className="flex min-h-32 justify-between gap-5 rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div>
                <h3 className="font-display text-lg font-bold">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-md text-[10px] leading-5 text-ink/60">
                  {principle.description}
                </p>
              </div>
              <span className="font-display text-sm font-bold text-gold">
                {principle.number}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
