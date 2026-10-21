"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formId = useId();
  const hasStarted = useRef(false);

  function handleFirstInteraction() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("booking_form_start");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please call our office instead.");
      }

      setState("success");
      form.reset();
      trackEvent("booking_request_submitted");
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error.");
      trackEvent("booking_request_error");
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-brand-800"
      >
        <p className="text-lg font-semibold">Request received!</p>
        <p className="mt-1 text-sm">
          Thanks for reaching out — our scheduling team will call or email you
          shortly to confirm your appointment time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor={`${formId}-name`} className="text-sm font-medium text-neutral-800">
            Full name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-neutral-800">
            Phone number
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={`${formId}-email`} className="text-sm font-medium text-neutral-800">
          Email address
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor={`${formId}-date`} className="text-sm font-medium text-neutral-800">
            Preferred date
          </label>
          <input
            id={`${formId}-date`}
            name="preferredDate"
            type="date"
            required
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor={`${formId}-time`} className="text-sm font-medium text-neutral-800">
            Preferred time
          </label>
          <input
            id={`${formId}-time`}
            name="preferredTime"
            type="time"
            required
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500"
          />
        </div>
      </div>

      <fieldset className="flex flex-col gap-1">
        <legend className="text-sm font-medium text-neutral-800">
          Are you a new or existing patient?
        </legend>
        <div className="mt-1 flex gap-4">
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="radio" name="patientStatus" value="new" defaultChecked required />
            New patient
          </label>
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="radio" name="patientStatus" value="existing" />
            Existing patient
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-1">
        <label htmlFor={`${formId}-reason`} className="text-sm font-medium text-neutral-800">
          Reason for visit
        </label>
        <textarea
          id={`${formId}-reason`}
          name="reason"
          rows={3}
          required
          placeholder="e.g. routine cleaning, tooth pain, Invisalign consult"
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand-500"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Request Appointment"}
      </button>

      <p className="text-xs text-neutral-500">
        Please do not include sensitive medical details in this form — our
        team will discuss your health history by phone or in person.
      </p>
    </form>
  );
}
