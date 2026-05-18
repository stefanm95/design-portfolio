import { resolveLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import Section from "@/design/layout/Section";

import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";
import ContactAvailability from "./ContactAvailability";
import ContactFooter from "./ContactFooter";

import { ui } from "@/theme";

export default function Contact() {
  const layout = resolveLayoutRuntime();

  return (
    <Section id='contact' className={layout.contact.section}>
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
