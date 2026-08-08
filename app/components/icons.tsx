type IconProps = {
  className?: string;
};

const base = "h-6 w-6";

export function IconGlobe({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 2.6 4.2 5.7 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.7-4.2-9s1.4-6.4 4.2-9Z" />
    </svg>
  );
}

export function IconChartLine({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M4 19V5M4 19h16" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

export function IconCheckShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconTrendUp({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 19V13.5" />
      <path d="M10.5 19V9" />
      <path d="M16.5 19V6" />
      <path d="M13.5 8.5 16.5 5.5 19.5 8.5" />
    </svg>
  );
}

export function IconGear({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V19a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1Z" />
    </svg>
  );
}

export function IconPieChart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 3.8V12h8.2" fill="currentColor" fillOpacity={0.85} strokeLinejoin="round" />
    </svg>
  );
}

export function IconPeople({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c.8-3.4 3.3-5.5 6.5-5.5s5.7 2.1 6.5 5.5" />
      <circle cx="17" cy="7" r="2.4" />
      <path d="M15.8 14.8c2.6.3 4.5 2.2 5.2 5.2" />
    </svg>
  );
}

export function IconLaptop({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="4" y="4" width="16" height="11" rx="1.2" />
      <path d="M2 19h20M9 15v2M15 15v2" />
    </svg>
  );
}

export function IconLandmark({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 10v11M18 10v11M10 10v11M14 10v11" />
    </svg>
  );
}

export function IconBuilding({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="5" y="3" width="9" height="18" rx="0.6" />
      <rect x="14" y="9" width="5" height="12" rx="0.6" />
      <path d="M8 7h2M8 11h2M8 15h2" />
    </svg>
  );
}

export function IconHeart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 20s-7-4.4-9.4-9C1 7.7 2.6 4.5 6 4.2c2-.2 3.6.9 6 3.4 2.4-2.5 4-3.6 6-3.4 3.4.3 5 3.5 3.4 6.8C19 15.6 12 20 12 20Z" />
    </svg>
  );
}

export function IconCart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M3 4h2l2.2 11.4A2 2 0 0 0 9.2 17H18a2 2 0 0 0 2-1.6L21.5 8H6" />
      <circle cx="10" cy="21" r="1.3" />
      <circle cx="18" cy="21" r="1.3" />
    </svg>
  );
}

export function IconFactory({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M3 21V11l5 3.5V11l5 3.5V9l6 4v8H3Z" />
      <path d="M8 21v-4M13 21v-4" />
    </svg>
  );
}

export function IconCpu({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="1.4" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.6" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

export function IconGradCap({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M2 9l10-4 10 4-10 4-10-4Z" />
      <path d="M6 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5M22 9v6" />
    </svg>
  );
}

export function IconNetwork({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="19" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M6.8 7.4 10.5 16M17.2 7.4 13.5 16M7.2 6h9.6" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconChevron({ className = "h-5 w-5", direction = "left" }: IconProps & { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function IconQuote({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9.5 6C6.5 7.3 4.8 9.6 4.8 12.6c0 2.4 1.6 4 3.6 4 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.6-2.9.3-1.5 1.7-2.8 3.2-3.3L9.5 6Zm9 0c-3 1.3-4.7 3.6-4.7 6.6 0 2.4 1.6 4 3.6 4 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.6-2.9.3-1.5 1.7-2.8 3.2-3.3L18.5 6Z" />
    </svg>
  );
}

export function IconMapPin({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconMail({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.4" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function IconBriefcase({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.6" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18M10.7 12v1.4h2.6V12" />
    </svg>
  );
}

export function IconLogoMark({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      <path d="M2 4 14 28 16 24 6 4Z" fill="#c9973f" />
      <path d="M30 4 18 28 14.5 21 22.5 4Z" fill="#0e2140" />
    </svg>
  );
}

export function IconWhatsApp({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a8 8 0 0 0 1.3 4.4Z" />
      <path
        d="M9 9.6c0-.6.5-1.1 1.1-1.1.3 0 .5.1.6.4l.7 1.4c.1.2 0 .5-.1.7l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.1.5-.2.7-.1l1.4.7c.3.1.4.3.4.6 0 .6-.5 1.1-1.1 1.1-3 0-6.1-3.1-6.1-6.1Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function IconLinkedIn({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.5 10v6.2M7.5 7.5v.01M12 16.2V13c0-1.4.9-2.4 2.2-2.4 1.3 0 2 .9 2 2.4v3.2" strokeLinecap="round" />
    </svg>
  );
}
