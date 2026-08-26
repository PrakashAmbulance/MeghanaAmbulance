"use client";

import { useState, type FormEvent } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, TextInput, TextArea, Select, Honeypot } from "@/components/forms/fields";
import { CheckIcon } from "@/components/icons";

type Errors = Partial<Record<
  "organization" | "contactPerson" | "phone" | "email" | "orgType" | "city",
  string
>>;

const phonePattern = /^[6-9]\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const orgTypes = [
  "Hospital",
  "Nursing Home",
  "Clinic",
  "Diagnostic Centre",
  "Corporate Healthcare Team",
  "Senior-Care Facility",
  "Event Medical Team",
  "Other Healthcare Institution",
];

export default function B2BForm() {
  const { status, errorMessage, submit, reset } = useFormSubmit("/api/b2b-enquiry");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;

    const form = new FormData(e.currentTarget);
    const organization = String(form.get("organization") || "").trim();
    const contactPerson = String(form.get("contactPerson") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const orgType = String(form.get("orgType") || "").trim();
    const city = String(form.get("city") || "").trim();

    const nextErrors: Errors = {};
    if (!organization) nextErrors.organization = "Please enter your organization name.";
    if (!contactPerson) nextErrors.contactPerson = "Please enter a contact person.";
    if (!phonePattern.test(phone)) nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    if (email && !emailPattern.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!orgType) nextErrors.orgType = "Please select an organization type.";
    if (!city) nextErrors.city = "Please enter a city.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    await submit({
      formType: "b2b-enquiry",
      organization,
      contactPerson,
      phone,
      email,
      orgType,
      city,
      requirement: form.get("requirement"),
      ambulancesRequired: form.get("ambulancesRequired"),
      message: form.get("message"),
    });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center text-white">
        <CheckIcon className="mx-auto h-8 w-8 text-medblue-400" />
        <p className="mt-3 font-bold">Enquiry received</p>
        <p className="mt-1 text-sm text-white/70">
          Thank you for reaching out. Our team will contact you to discuss
          your organization&apos;s requirements.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-4 text-sm font-semibold text-medblue-300 underline underline-offset-2"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl bg-white p-6 shadow-xl shadow-black/20 sm:p-8">
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Organization Name" htmlFor="organization" required error={errors.organization}>
          <TextInput id="organization" name="organization" required />
        </Field>
        <Field label="Contact Person" htmlFor="contactPerson" required error={errors.contactPerson}>
          <TextInput id="contactPerson" name="contactPerson" required />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="b2b-phone" required error={errors.phone}>
          <TextInput id="b2b-phone" name="phone" type="tel" inputMode="numeric" required />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <TextInput id="email" name="email" type="email" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Organization Type" htmlFor="orgType" required error={errors.orgType}>
          <Select id="orgType" name="orgType" defaultValue="" required>
            <option value="" disabled>
              Select organization type
            </option>
            {orgTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="City" htmlFor="city" required error={errors.city}>
          <TextInput id="city" name="city" required />
        </Field>
      </div>

      <Field label="Requirement" htmlFor="requirement">
        <TextInput id="requirement" name="requirement" placeholder="e.g. On-call ambulance support, event coverage" />
      </Field>

      <Field label="Number of Ambulances Required" htmlFor="ambulancesRequired">
        <TextInput id="ambulancesRequired" name="ambulancesRequired" type="number" min={0} />
      </Field>

      <Field label="Message" htmlFor="message">
        <TextArea id="message" name="message" rows={4} />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-emergency-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emergency-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emergency-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Partner With Us"}
      </button>
    </form>
  );
}
