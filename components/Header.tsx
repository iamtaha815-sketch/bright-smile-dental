"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/smile-gallery", label: "Smile Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const patientInfoLinks = [
  { href: "/new-patients", label: "New Patients" },
  { href: "/insurance-financing", label: "Insurance & Financing" },
  { href: "/blog", label: "Blog" },
];

const allLinksForMobile = [
  navLinks[0],
  navLinks[1],
  navLinks[2],
  navLinks[3],
  ...patientInfoLinks,
  navLinks[4],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-brand-800 sm:text-xl"
        >
          {siteConfig.practiceName}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}

          <details className="group relative">
            <summary className="flex list-none cursor-pointer items-center gap-1 text-sm font-medium text-neutral-700 transition hover:text-brand-600 [&::-webkit-details-marker]:hidden">
              Patient Info
              <span aria-hidden="true" className="text-xs transition group-open:rotate-180">▾</span>
            </summary>
            <nav
              aria-label="Patient Info"
              className="absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg"
            >
              <ul className="flex flex-col gap-1">
                {patientInfoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${siteConfig.phone.raw}`}
            onClick={() => trackEvent("phone_click", { location: "header" })}
            className="text-sm font-semibold text-brand-700 hover:text-brand-600"
          >
            {siteConfig.phone.display}
          </a>
          <Link
            href="/new-patients#book"
            onClick={() => trackEvent("appointment_cta_click", { location: "header" })}
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Book Appointment
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary className="list-none cursor-pointer rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg"
          >
            <ul className="flex flex-col gap-1">
              {allLinksForMobile.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
