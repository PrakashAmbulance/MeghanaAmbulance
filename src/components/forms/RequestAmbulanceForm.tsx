"use client";

import { useState, type FormEvent } from "react";
import { services, business, buildTelUrl } from "@/lib/business";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { Field, TextInput, TextArea, Select, Honeypot } from "@/components/forms/fields";
import { CheckIcon, PhoneIcon } from "@/components/icons";

type Errors = Partial<Record<
  "name" | "phone" | "pickup" | "drop" | "service" | "condition",
  string
>>;

const phonePattern = /^[6-9]\d{9}$/;

export default function RequestAmbulanceForm() {
  const { status, errorMessage, submit, reset } = useFormSubmit("/api/request-ambulance");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return; // silently drop likely-bot submissions

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const pickup = String(form.get("pickup") || "").trim();
    const drop = String(form.get("drop") || "").trim();
    const service = String(form.get("service") || "").trim();
    const condition = String(form.get("condition") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter the patient or caller name.";
    if (!phonePattern.test(phone))
      nextErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    if (!pickup) nextErrors.pickup = "Please enter the pickup location.";
    if (!service) nextErrors.service = "Please select the required service.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    await submit({
      formType: "ambulance-request",
      name,
      phone,
      pickup,
      drop,
      service,
      condition,
      preferredDate: form.get("preferredDate"),
      preferredTime: form.get("preferredTime"),
      additionalInfo: form.get("additionalInfo"),
    });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-medblue-100 bg-medblue-50 p-6 text-center">
        <CheckIcon className="mx-auto h-8 w-8 text-medblue-600" />
        <p className="mt-3 font-bold text-navy-900">Request received</p>
        <p className="mt-1 text-sm text-ink-700">
          Our team will get in touch shortly. For an immediate emergency,
          please call us directly instead of waiting for a response.
        </p>
        <a
          href={buildTelUrl(business.phone)}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emergency-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emergency-700"
        >
          <PhoneIcon className="h-4 w-4" /> Call {business.phoneDisplay}
        </a>
        <div>
          <button
            type="button"
            onClick={reset}
            className="mt-4 text-sm font-semibold text-medblue-600 underline underline-offset-2"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="rounded-lg bg-emergency-100 px-4 py-3 text-sm font-semibold text-emergency-700">
        For immediate emergencies, please call us directly at{" "}
        <a href={buildTelUrl(business.phone)} className="underline">
          {business.phoneDisplay}
        </a>{" "}
        rather than using this form.
      </div>

      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Patient / Caller Name" htmlFor="name" required error={errors.name}>
          <TextInput id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Phone Number" htmlFor="phone" required error={errors.phone}>
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            required
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Pickup Location" htmlFor="pickup" required error={errors.pickup}>
          <TextInput id="pickup" name="pickup" required />
        </Field>
        <Field label="Drop Location" htmlFor="drop" error={errors.drop}>
          <TextInput id="drop" name="drop" />
        </Field>
      </div>

      <Field label="Required Service" htmlFor="service" required error={errors.service}>
        <Select id="service" name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Patient Condition / Requirement" htmlFor="condition" error={errors.condition}>
        <TextArea id="condition" name="condition" rows={3} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred Date" htmlFor="preferredDate">
          <TextInput id="preferredDate" name="preferredDate" type="date" />
        </Field>
        <Field label="Preferred Time" htmlFor="preferredTime">
          <TextInput id="preferredTime" name="preferredTime" type="time" />
        </Field>
      </div>

      <Field label="Additional Information" htmlFor="additionalInfo">
        <TextArea id="additionalInfo" name="additionalInfo" rows={3} />
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
        {status === "loading" ? "Submitting..." : "Request Ambulance"}
      </button>
    </form>
  );
}
