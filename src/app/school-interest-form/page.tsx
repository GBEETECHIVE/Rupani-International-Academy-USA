import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "School Interest Form | Rupani International Academy",
  description:
    "Tell Rupani International Academy about your family and connect with our admissions team.",
};

const referralOptions = [
  "Facebook",
  "Instagram",
  "Referral",
  "Flyer",
  "Visit",
  "Billboard ad",
  "Other",
];

const interestOptions = [
  "Admission",
  "Campus Tour",
  "Fee Details",
  "Scholarship Info",
];

const inputClassName =
  "mt-1.5 min-h-9 w-full rounded-md border border-[#d4d8da] bg-white px-2.5 py-2 text-base text-ink outline-none placeholder:text-[#778392] focus:border-gold focus:ring-2 focus:ring-gold/20";

function FormInput({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="block text-base font-medium text-ink">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={inputClassName}
      />
    </label>
  );
}

export default function SchoolInterestFormPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-7 sm:px-7 sm:py-8">
          <p className="mb-2 text-base font-semibold uppercase tracking-[0.12em] text-gold">
            Connect with admissions
          </p>
          <h1 className="font-display text-[26px] font-bold leading-tight">
            School Interest Form
          </h1>
          <p className="mt-1.5 max-w-xl text-base leading-[1.5] text-white/85">
            Tell us a little about your family and what you’re looking for.
            <br className="hidden sm:block" /> Our admissions team is here to
            help you take the next step.
          </p>
        </div>
      </section>

      <main className="w-full flex-1 bg-paper">
        <div className="mx-auto grid max-w-[1200px] gap-5 px-5 py-6 sm:px-7 sm:py-8 md:grid-cols-[minmax(0,2fr)_minmax(200px,0.92fr)] lg:gap-7">
          <form
            id="interest-form"
            className="rounded-xl border border-[#e7e4dc] bg-white p-4 sm:p-5 lg:p-6"
          >
            <section aria-labelledby="family-heading">
              <h2
                id="family-heading"
                className="font-display text-[26px] font-bold text-ink"
              >
                <span className="mr-2">01</span>
                Your family
              </h2>
              <div className="mt-3 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                <FormInput
                  id="guardian-name"
                  label="Parent / Guardian Name:"
                  placeholder="Enter parent or guardian’s full name"
                />
                <FormInput
                  id="student-name"
                  label="Student Name:"
                  placeholder="Enter student’s full name"
                />
                <FormInput
                  id="birth-age"
                  label="Date of Birth / Age:"
                  placeholder="DD / MM / YYYY or age in years"
                />
                <FormInput
                  id="grade"
                  label="Grade Applying For:"
                  placeholder="Enter the grade you are considering"
                />
                <div className="sm:col-span-2">
                  <FormInput
                    id="current-school"
                    label="Current School:"
                    placeholder="Enter current school"
                  />
                </div>
              </div>
            </section>

            <section
              aria-labelledby="contact-heading"
              className="mt-4 border-t border-[#e4e6e7] pt-3"
            >
              <h2
                id="contact-heading"
                className="font-display text-[26px] font-bold text-ink"
              >
                <span className="mr-2">02</span>
                How can we reach you?
              </h2>
              <div className="mt-3 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                <FormInput
                  id="phone"
                  label="Phone / WhatsApp Number:"
                  placeholder="Include country code"
                  type="tel"
                />
                <FormInput
                  id="email"
                  label="Email Address:"
                  placeholder="you@example.com"
                  type="email"
                  required
                />
                <div className="sm:col-span-2">
                  <FormInput
                    id="location"
                    label="Area / Location:"
                    placeholder="Your area, city or neighbourhood"
                  />
                </div>
              </div>

              <fieldset className="mt-4">
                <legend className="text-base font-medium text-ink">
                  How did you hear about us?
                </legend>
                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-4">
                  {referralOptions.map((option) => (
                    <label
                      key={option}
                      className="flex min-h-5 items-center gap-1.5 text-base text-ink"
                    >
                      <input
                        type="radio"
                        name="referral"
                        value={option}
                        className="size-3 accent-[#c99a3b]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-4">
                <div className="flex items-center justify-between gap-2">
                  <legend className="text-base font-medium text-ink">
                    Interested in:
                  </legend>
                  <span className="text-base text-[#778392]">
                    Select all that apply
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest}
                      className="flex min-h-5 items-center gap-1.5 text-base text-ink"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        className="size-3 rounded-sm accent-[#c99a3b]"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4">
                <FormInput
                  id="preferred-time"
                  label="Preferred Time to Contact:"
                  placeholder="e.g. Weekdays, 3–5 pm — please include your time zone"
                />
              </div>
              <label
                htmlFor="message"
                className="mt-4 block text-base font-medium text-ink"
              >
                Any Message / Question:
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you would like to know..."
                  rows={3}
                  className={`${inputClassName} min-h-14 resize-y`}
                />
              </label>
            </section>

            <button
              type="submit"
              className="mt-4 min-h-10 w-full rounded-full bg-gold px-4 py-2 text-base font-semibold text-ink transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Submit &amp; Our Admissions Team Will Contact You Shortly.
            </button>
          </form>

          <aside className="flex flex-col gap-3">
            <div className="relative min-h-44 overflow-hidden rounded-xl sm:min-h-48 md:min-h-32 lg:min-h-44">
              <Image
                src="/images/15778bcfb02aec8153c630753b58b80e98bd82d4.png"
                alt="A welcoming view of the school campus"
                fill
                sizes="(max-width: 767px) 100vw, 30vw"
                className="object-cover"
              />
            </div>

            <section className="rounded-xl bg-[#10213b] px-5 py-5 text-white sm:px-6 sm:py-6 md:min-h-[240px] lg:min-h-[260px]">
              <p className="text-base font-semibold uppercase tracking-[0.08em] text-gold">
                A personal welcome
              </p>
              <h2 className="mt-3 font-display text-[26px] font-bold leading-[1.15]">
                Your next chapter
                <br />
                starts with a conversation.
              </h2>
              <p className="mt-3 text-base leading-[1.55] text-white/90">
                Whether you’re exploring a place, planning a tour or asking
                about fees, we’re here to guide you.
              </p>
              <p className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-gold">
                What happens next?
              </p>
              <ol className="mt-2 list-inside list-decimal space-y-0.5 text-base leading-[1.45] text-white/90">
                <li>Share your details and interests.</li>
                <li>Our admissions team reviews your enquiry.</li>
                <li>We contact you to discuss the next step.</li>
              </ol>
            </section>

            <p className="px-1 pt-1 text-base leading-[1.55] text-[#657386]">
              Just exploring? You’re welcome here.
              <br />
              This is an expression of interest, not a formal application.
            </p>
          </aside>
        </div>
      </main>

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              aria-label="Rupani International Academy home"
              className="relative h-20 w-40 shrink-0 overflow-hidden rounded-md bg-white p-1"
            >
              <Image
                src="/images/logo.png"
                alt="Rupani International Academy USA"
                fill
                sizes="160px"
                className="object-contain p-1"
              />
            </Link>
            <div>
              <p className="font-display text-[26px] font-bold">
                Rupani International Academy USA
              </p>
              <p className="mt-1.5 text-base text-white/80">
                Houston, Texas, USA
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="text-base text-white transition-colors hover:text-gold"
          >
            Back to homepage <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
