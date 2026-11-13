import Image from "next/image";

export function CommunitySection() {
  return (
    <section
      id="community"
      className="scroll-mt-8 bg-paper px-7 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-7 min-[560px]:grid-cols-[1.16fr_1fr]">
        <div className="relative aspect-[1.3] overflow-hidden rounded-xl min-[560px]:mt-5">
          <Image
            src="/images/WhatsApp Image 2026-11-13 at 5.01.34 PM.jpeg"
            alt="Students, educators, and community members learning together outdoors"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-base font-semibold text-[#C79C47]">
            Who We Are
          </p>
          <h2 className="mt-1 font-display text-lg font-bold leading-tight sm:text-xl lg:text-3xl">
            Empowering People
            <br className="hidden min-[560px]:block" /> Through Lifelong Learning
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#363636]">
            Rupani Development Initiatives (RDI) invests in human potential
            through lifelong learning and education. From early childhood to
            leadership, we empower individuals with knowledge, creativity, and
            purpose. Our approach nurtures intellectual, cultural, and spiritual
            growth. We encourage responsible global citizenship and meaningful
            community engagement. Through education, we aim to create lasting
            impact across generations.
          </p>
           <br/>
          <div className="mt-3 grid gap-2 min-[560px]:mt-2 min-[560px]:gap-1.5">
            <article className="rounded-xl bg-white px-4 py-3 min-[560px]:px-3 min-[560px]:py-2.5">
              <h3 className="font-display text-sm font-bold">
                Education Across a Lifetime
              </h3>
              <p className="mt-1 text-sm leading-5 text-[#363636]">
                RDI invests in human potential through lifelong learning, from
                early childhood to leadership and meaningful work. We believe
                every stage of education builds knowledge, creativity,
                confidence, and the ability to shape a better future.
              </p>
            </article>
            <br/>
            <article className="rounded-xl bg-white px-4 py-3 min-[560px]:px-3 min-[560px]:py-2.5">
              <h3 className="font-display text-sm font-bold">
                Building Global Citizens
              </h3>
              <p className="mt-1 text-sm leading-5 text-[#363636]">
                We nurture intellectual growth, cultural identity, and spiritual
                purpose to inspire responsible global citizens. Through Rupani
                Academy Houston, we aim to create an IB-guided Grade 1-12
                learning pathway that empowers individuals and strengthens
                communities.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
