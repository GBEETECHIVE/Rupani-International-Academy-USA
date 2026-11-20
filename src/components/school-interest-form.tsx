"use client";

import { useState, type FormEvent } from "react";

const TO = "info@rupaniacademyusa.com";
const ENDPOINT = `https://formsubmit.co/ajax/${TO}`;

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

const labelClassName = "block text-[13px] font-semibold text-ink";

const inputBase =
  "mt-2 w-full rounded-md border border-[#d4d8da] bg-white px-3 text-[13px] text-ink outline-none placeholder:text-[#8a95a3] focus:border-gold focus:ring-2 focus:ring-gold/20";

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
    <label htmlFor={id} className={labelClassName}>
      {label}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`${inputBase} h-[41px] font-normal`}
      />
    </label>
  );
}

type Status = "idle" | "sending" | "success" | "fallback" | "error";

export default function InterestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [gmailUrl, setGmailUrl] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);

    // Honeypot: real visitors never fill this hidden field
    if (d.get("_honey")) return;

    setStatus("sending");
    setError("");

    const get = (k: string) => String(d.get(k) || "").trim() || "-";
    const interests = d.getAll("interests").map(String).join(", ") || "-";

    const data = {
      "Parent / Guardian Name": get("guardian-name"),
      "Student Name": get("student-name"),
      "Date of Birth / Age": get("birth-age"),
      "Grade Applying For": get("grade"),
      "Current School": get("current-school"),
      "Phone / WhatsApp": get("phone"),
      Email: get("email"),
      "Area / Location": get("location"),
      "How they heard about us": get("referral"),
      "Interested in": interests,
      "Preferred Time to Contact": get("preferred-time"),
      Message: get("message"),
    };

    const subject = `New school interest: ${data["Student Name"]} (${data["Grade Applying For"]})`;

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          _captcha: "false",
          ...data,
          email: d.get("email"), // used as Reply-To
        }),
      });
      const json = await res.json();
      if (!res.ok || String(json.success) !== "true") {
        throw new Error(json.message || "Something went wrong.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      if (err instanceof TypeError) {
        // Network blocked the request: fall back to the visitor's email app
        const body = Object.entries(data)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\r\n")
          .slice(0, 1800);

        setGmailUrl(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        );
        setStatus("fallback");
        window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } else {
        setError((err as Error).message);
        setStatus("error");
      }
    }
  }

  return (
    <form
      id="interest-form"
      onSubmit={onSubmit}
      className="relative rounded-xl border border-[#e7e4dc] bg-white p-5 sm:p-[26px]"
    >
      {/* Honeypot: hidden from people, bots fill it in */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <section aria-labelledby="family-heading">
        <h2
          id="family-heading"
          className="font-display text-[22px] font-bold leading-tight text-ink"
        >
          <span className="mr-2.5">01</span>
          Your family
        </h2>
        <div className="mt-4 grid gap-x-5 gap-y-4 sm:grid-cols-2">
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
        className="mt-6 border-t border-[#d9dcde] pt-6"
      >
        <h2
          id="contact-heading"
          className="font-display text-[22px] font-bold leading-tight text-ink"
        >
          <span className="mr-2.5">02</span>
          How can we reach you?
        </h2>
        <div className="mt-4 grid gap-x-5 gap-y-4 sm:grid-cols-2">
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

        <fieldset className="mt-6">
          <legend className={labelClassName}>How did you hear about us?</legend>
          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4">
            {referralOptions.map((option) => (
              <label
                key={option}
                className="flex min-h-6 items-center gap-2.5 text-[13px] text-ink"
              >
                <input
                  type="radio"
                  name="referral"
                  value={option}
                  className="size-3.5 accent-[#c99a3b]"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <div className="flex items-center justify-between gap-2 sm:pr-[75px]">
            <legend className={labelClassName}>Interested In:</legend>
            <span className="text-[11px] text-[#778392]">
              Select all that apply
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
            {interestOptions.map((interest) => (
              <label
                key={interest}
                className="flex min-h-6 items-center gap-2.5 text-[13px] text-ink"
              >
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  className="size-3.5 rounded-sm accent-[#c99a3b]"
                />
                {interest}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-8">
          <FormInput
            id="preferred-time"
            label="Preferred Time to Contact:"
            placeholder="e.g. Weekdays, 3–5 pm — please include your time zone"
          />
        </div>

        <label htmlFor="message" className={`${labelClassName} mt-5`}>
          Any Message / Question:
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what you would like to know..."
            rows={3}
            maxLength={5000}
            className={`${inputBase} min-h-[86px] resize-y py-3 font-normal`}
          />
        </label>
      </section>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 h-[52px] w-full rounded-full bg-gold px-4 text-[14px] font-semibold text-ink transition-colors hover:bg-amber-400 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {status === "sending"
          ? "Sending..."
          : "Submit & Our Admissions Team Will Contact You Shortly."}
      </button>

      {/* Only takes up space after a submit attempt */}
      <div aria-live="polite">
        {status === "success" && (
          <p className="mt-4 rounded-md bg-green-50 px-3 py-2.5 text-[13px] font-semibold text-green-700 ring-1 ring-green-200">
            Thank you! Your details have been sent. Our admissions team will
            contact you shortly.
          </p>
        )}
        {status === "fallback" && (
          <p className="mt-4 rounded-md bg-blue-50 px-3 py-2.5 text-[13px] text-ink ring-1 ring-blue-200">
            <span className="font-semibold">We couldn’t send directly,</span>{" "}
            so we opened your email app with your message. Press{" "}
            <span className="font-semibold">Send</span> there to finish.
            Nothing opened?{" "}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Send with Gmail instead
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 rounded-md bg-red-50 px-3 py-2.5 text-[13px] font-semibold text-red-600 ring-1 ring-red-200">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}