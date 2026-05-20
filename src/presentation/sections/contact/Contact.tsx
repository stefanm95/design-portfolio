import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import Section from "@/design/layout/Section";

import ContactAvailability from "./ContactAvailability";
import ContactFooter from "./ContactFooter";
import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";

import { ui } from "@/theme";

export default function Contact() {
  const layout = resolvePageLayoutRuntime();

  return (
    <Section id="contact" className={layout.contact.section}>
      <div
        className={`
          relative
          overflow-hidden

          border
          ${ui.borders.subtle}
        `}
      >
        <ContactHero />

        <ContactLinks />

        <ContactAvailability />

        <ContactFooter />
      </div>
    </Section>
  );
}
