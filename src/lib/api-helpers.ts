import { NextResponse } from "next/server";

/**
 * Shared helpers for the /api/* route stubs.
 *
 * These routes currently validate the payload, sanitize free-text fields,
 * and log the submission server-side. No backend (database, CRM, SMS/email
 * provider) is connected yet. See README.md, section "Connecting a real
 * backend", for exactly where to add that integration.
 */

const MAX_FIELD_LENGTH = 2000;

/** Strips HTML tags and trims/truncates a free-text field. */
export function sanitizeText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, MAX_FIELD_LENGTH);
}

export function isValidIndianMobile(value: unknown): boolean {
  return typeof value === "string" && /^[6-9]\d{9}$/.test(value.trim());
}

export function badRequest(message: string) {
  return NextResponse.json({ ok: false, message }, { status: 400 });
}

export function ok() {
  return NextResponse.json({ ok: true });
}
