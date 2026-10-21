"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { IconFacebook, IconInstagram } from "@/components/Icons";
import { trackEvent } from "@/lib/analytics";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/insurance-financing", label: "Insurance & Financing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/accessibility-statement", label: "Accessibility Statement" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-brand-900 text-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">{siteConfig.practiceName}</p>
          <address className="mt-3 text-sm leading-relaxed text-brand-100 not-italic">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </address>
          <p className="mt-3 text-sm text-brand-100">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              onClick={() => trackEvent("phone_click", { location: "footer" })}
              className="hover:text-white"
            >
              {siteConfig.phone.display}
            </a>
          </p>
          <p className="text-sm text-brand-100">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Explore
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-brand-100 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Office Hours
          </p>
          <ul className="mt-3 flex flex-col gap-1 text-sm text-brand-100">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{"closed" in h ? "Closed" : `${h.open} - ${h.close}`}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Follow Us
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-brand-100 transition hover:bg-brand-700 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-brand-100 transition hover:bg-brand-700 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-800 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-brand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.practiceName}. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
