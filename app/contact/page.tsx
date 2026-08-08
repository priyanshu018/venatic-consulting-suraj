import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Venatic Consulting",
  description:
    "Get in touch with Venatic Consulting to talk through your organization's next strategic challenge.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's Build a Better Future Together"
        description="Tell us about your challenge and a member of our team will get back to you."
      />
      <ContactSection showHeading={false} />
    </>
  );
}
