import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import InterestForm from "../../components/school-interest-form";

export const metadata: Metadata = {
  title: "School Interest Form | Rupani International Academy",
  description:
    "Tell Rupani International Academy about your family and connect with our admissions team.",
};

export default function InterestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-12 sm:px-[60px] sm:pt-[60px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-gold">
            Connect with admissions
          </p>
          <h1 className="mt-4 font-display text-[36px] font-bold leading-tight sm:text-[42px]">
            School Interest Form
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.5] text-white/90">
            Tell us a little about your family and what you’re looking for.
            <br className="hidden sm:block" /> Our admissions team is here to
            help you take the next step.
          </p>
        </div>
      </section>

      <main className="w-full flex-1 bg-paper">
        <div className="mx-auto grid max-w-[1200px] items-start gap-7 px-5 py-10 sm:px-[60px] md:grid-cols-[minmax(0,712fr)_minmax(0,329fr)]">
          <InterestForm />

          <aside className="flex flex-col gap-5">
            <div className="relative h-[206px] overflow-hidden rounded-xl">
              <Image
                src="/images/15778bcfb02aec8153c630753b58b80e98bd82d4.png"
                alt="A welcoming view of the school campus"
                fill
                sizes="(max-width: 767px) 100vw, 30vw"
                className="object-cover"
              />
            </div>

            <section className="rounded-xl bg-[#10213b] px-6 pb-14 pt-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-gold">
                A personal welcome
              </p>
              <h2 className="mt-4 font-display text-[25px] font-bold leading-[1.2]">
                Your next chapter
                <br />
                starts with a conversation.
              </h2>
              <p className="mt-5 text-[14px] leading-[1.45] text-white/90">
                Whether you’re exploring a place, planning a tour or asking
                about fees, we’re here to guide you.
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.04em] text-gold">
                What happens next?
              </p>
              <ol className="mt-4 space-y-1 text-[12px] leading-[1.4] text-white/90">
                <li>1. Share your details and interests.</li>
                <li>2. Our admissions team reviews your enquiry.</li>
                <li>3. We contact you to discuss the next step.</li>
              </ol>
            </section>

            <p className="px-1 text-[13px] leading-[1.5] text-[#657386]">
              Just exploring? You’re welcome here.
              <br />
              This is an expression of interest, not a formal application.
            </p>
          </aside>
        </div>
      </main>

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-[60px]">
          <div>
            <p className="font-display text-[22px] font-bold">
              Rupani International Academy USA
            </p>
            <p className="mt-3 text-[13px] text-white/90">
              Houston, Texas, USA
            </p>
          </div>
          <Link
            href="/"
            className="text-[12px] font-semibold text-white transition-colors hover:text-gold"
          >
            Back to homepage <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}