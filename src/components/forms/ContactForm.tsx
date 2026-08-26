"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, TextInput, TextArea, Honeypot } from "@/components/forms/fields";
import { CheckIcon } from "@/components/icons";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;
const phonePattern = /^[6-9]\d{9}$/;

export default function ContactForm() {
  const { status, errorMessage, submit, reset } = useFormSubmit("/api/contact");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!phonePattern.test(phone)) nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    if (!message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    await submit({ formType: "general-enquiry", name, phone, email: form.get("email"), message });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-medblue-100 bg-medblue-50 p-6 text-center">
        <CheckIcon className="mx-auto h-8 w-8 text-medblue-600" />
        <p className="mt-3 font-bold text-navy-900">Message sent</p>
        <p className="mt-1 text-sm text-ink-700">
          Thanks for reaching out — our team will get back to you soon.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-4 text-sm font-semibold text-medblue-600 underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <Field label="Name" htmlFor="contact-name" required error={errors.name}>
        <TextInput id="contact-name" name="name" autoComplete="name" required />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="contact-phone" required error={errors.phone}>
          <TextInput id="contact-phone" name="phone" type="tel" inputMode="numeric" required />
        </Field>
        <Field label="Email (optional)" htmlFor="contact-email">
          <TextInput id="contact-email" name="email" type="email" />
        </Field>
      </div>
      <Field label="Message" htmlFor="contact-message" required error={errors.message}>
        <TextArea id="contact-message" name="message" rows={4} required />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-emergency-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
