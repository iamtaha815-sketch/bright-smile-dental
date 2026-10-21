// Small inline icon set used across the site.
type IconProps = { className?: string };

const base = "h-5 w-5 shrink-0";

export function IconCalendarCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m8.5 14.5 2 2 4-4" />
    </svg>
  );
}

export function IconShieldCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconFamily({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 21v-1a6 6 0 0 1 12 0v1" />
      <path d="M14.5 21v-.5a5.5 5.5 0 0 1 7.5-5.14" />
    </svg>
  );
}

export function IconSparkleOffice({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 3v2" />
    </svg>
  );
}

export function IconTooth({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3c-2 0-3 1.3-4.5 1.3S5 3 3.8 3.8C2.6 4.6 2.5 7 3 9.5c.5 2.7 1.3 4.3 2 7 .5 1.9 1 3.5 2.3 3.5s1.5-2.3 1.8-4 .6-2.5 1-2.5.7.8 1 2.5.5 4 1.8 4 1.8-1.6 2.3-3.5c.7-2.7 1.5-4.3 2-7 .5-2.5.4-4.9-.8-5.7C19 3 18 4.3 16.5 4.3S14 3 12 3Z" />
    </svg>
  );
}

export function IconAligner({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 9c0-2 3.5-4 8-4s8 2 8 4-3.5 4-8 4-8-2-8-4Z" />
      <path d="M4 9v4c0 2 3.5 4 8 4s8-2 8-4V9" />
      <path d="M8 9h8" />
    </svg>
  );
}

export function IconSparkle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export function IconRootCanal({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2c-1.8 0-2.8 1-4 1s-2-1-3.2-.3C3.6 3.4 3.5 5.3 4 7.5c.4 2 1.2 3.5 1.7 6 .4 1.5.8 2.5 1.8 2.5s1.2-1.6 1.5-3 .5-2 1-2 .6.6.9 2 .6 3 1.6 3 1.4-1 1.8-2.5c.5-2.5 1.3-4 1.7-6 .5-2.2.4-4.1-.8-4.8C14.8 3 13.8 2 12 2Z" />
      <path d="M12 13v7" />
    </svg>
  );
}

export function IconFacebook({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.8h2.5V21h3Z" />
    </svg>
  );
}

export function IconInstagram({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
