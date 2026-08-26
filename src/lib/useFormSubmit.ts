"use client";

import { useState, useCallback } from "react";
import { business } from "@/lib/business";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

function buildWhatsAppMessage(payload: Record<string, unknown>): string {
  const lines: string[] = [];

  if (payload.formType === "ambulance-request") {
    lines.push("*Ambulance Request*");
    lines.push(`Name: ${payload.name}`);
    lines.push(`Phone: ${payload.phone}`);
    lines.push(`Service: ${payload.service}`);
    lines.push(`Pickup: ${payload.pickup}`);
    if (payload.drop) lines.push(`Drop: ${payload.drop}`);
    if (payload.condition) lines.push(`Condition: ${payload.condition}`);
    if (payload.preferredDate) lines.push(`Date: ${payload.preferredDate}`);
    if (payload.preferredTime) lines.push(`Time: ${payload.preferredTime}`);
    if (payload.additionalInfo) lines.push(`Notes: ${payload.additionalInfo}`);
  } else if (payload.formType === "b2b-enquiry") {
    lines.push("*Hospital / B2B Partnership Enquiry*");
    lines.push(`Organization: ${payload.organization}`);
    lines.push(`Contact Person: ${payload.contactPerson}`);
    lines.push(`Phone: ${payload.phone}`);
    if (payload.email) lines.push(`Email: ${payload.email}`);
    if (payload.orgType) lines.push(`Type: ${payload.orgType}`);
    if (payload.city) lines.push(`City: ${payload.city}`);
    if (payload.requirement) lines.push(`Requirement: ${payload.requirement}`);
    if (payload.ambulancesRequired) lines.push(`Ambulances required: ${payload.ambulancesRequired}`);
    if (payload.message) lines.push(`Message: ${payload.message}`);
  } else {
    lines.push("*General Enquiry*");
    lines.push(`Name: ${payload.name}`);
    lines.push(`Phone: ${payload.phone}`);
    if (payload.email) lines.push(`Email: ${payload.email}`);
    if (payload.message) lines.push(`Message: ${payload.message}`);
  }

  return lines.join("\n");
}

export function useFormSubmit(_endpoint: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submit = useCallback(async (payload: Record<string, unknown>) => {
    setStatus("loading");
    try {
      const message = buildWhatsAppMessage(payload);
      const url = `https://wa.me/${business.whatsappNumberIntl}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setErrorMessage(`Could not open WhatsApp. Please call us directly at ${business.phoneDisplay}.`);
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setErrorMessage("");
  }, []);

  return { status, errorMessage, submit, reset };
}
