import Image from "next/image";
import { AboutSection } from "@/components/home/about-section";
import { CommunitySection } from "@/components/home/community-section";
import { HeroSection } from "@/components/home/hero-section";
import { LearningSection } from "@/components/home/learning-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { StoriesSection } from "@/components/home/stories-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProgramsSection />
        <AboutSection />
        <CommunitySection />
        <LearningSection />
        <StoriesSection />
        <section className="bg-soft-blue px-6 py-12 sm:px-10 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_260px]">
            <div>
              <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#C79C47]">
                Voices from our community
              </p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                A Community That Grows Together
              </h2>
              <blockquote className="mt-4 max-w-3xl font-display text-lg leading-relaxed text-ink/80 sm:text-xl">
                “A welcoming community where curiosity is encouraged, different
                perspectives are valued, and students are supported to find
                their voice.”
              </blockquote>
              {/* <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/50">
                Student / parent voice — shared with permission
              </p> */}
            </div>
            <div className="relative mx-auto h-64 w-full max-w-[260px] overflow-hidden rounded-xl">
              <Image
                src="/images/student-portrait.png"
                alt="A member of the Rupani International Academy community"
                fill
                sizes="260px"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
