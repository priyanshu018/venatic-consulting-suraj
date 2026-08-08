import ContactForm from "./ContactForm";
import { IconMail, IconMapPin, IconPhone, IconLinkedIn } from "./icons";
import { contactEmail, phoneNumbers, officeAddress } from "./content";

const contactMethods = [
  {
    icon: IconMail,
    label: "Email Us",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  ...phoneNumbers.map((phone) => ({
    icon: IconPhone,
    label: `Call Us (${phone.country})`,
    value: phone.display,
    href: phone.href,
  })),
  {
    icon: IconMapPin,
    label: "Office",
    value: officeAddress,
    href: undefined,
  },
  {
    icon: IconLinkedIn,
    label: "Connect With Us",
    value: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];

export default function ContactSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {showHeading ? (
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
              GET IN TOUCH
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Have a Challenge in Mind? Let&apos;s Talk
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-900/65">
              Share a few details about your organization and one of our
              consultants will get back to you.
            </p>
          </div>
        ) : null}

        <div
          className={`grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] ${
            showHeading ? "mt-14" : ""
          }`}
        >
          <div className="space-y-6">
            {contactMethods.map((method) => {
              const content = (
                <div className="flex items-start gap-3">
                  <method.icon className="mt-0.5 h-6 w-6 shrink-0 text-gold-500" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
                      {method.label}
                    </p>
                    <p className="text-sm font-semibold leading-snug text-navy-900">
                      {method.value}
                    </p>
                  </div>
                </div>
              );
              return method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block transition-opacity hover:opacity-70"
                >
                  {content}
                </a>
              ) : (
                <div key={method.label}>{content}</div>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
