import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout";

import Section from "@/design/layout/Section";

import { opacityClass, rgba } from "@/theme";

import ContactAvailability from "./ContactAvailability";
import ContactFooter from "./ContactFooter";
import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";
import ContactPanel from "./ContactPanel";

export default function Contact() {
  const layout = resolvePageLayoutRuntime();

  return (
    <Section
      contained={false}
      id="contact"
      spacingClassName="
    pt-16
    md:pt-24
    lg:pt-32
  "
      className="
    relative
    overflow-hidden
  "
    >
      {/* ATMOSPHERIC BASE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.06]
        "
        style={{
          backgroundImage:
            "url('/textures/stone/photo-ground-texture-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* DARK VIGNETTE */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.46)_100%)]
        "
      />

      {/* SOFT ATMOSPHERIC BLOOM */}
      <div
        className={`
          absolute
          left-1/2
          top-[22%]

          h-[32rem]
          w-[32rem]

          -translate-x-1/2

          rounded-full
          blur-sm

          ${opacityClass.subtle}
        `}
        style={{
          background: `radial-gradient(circle, ${rgba.cyanBloomStrong}, transparent 72%)`,
        }}
      />

      {/* CONTENT */}
      <div
        className={`
          relative
          z-10

          flex
          flex-col

          ${layout.contact.section}
        `}
      >
        {/* HERO */}
        <ContactHero />

        {/* GRID */}
        <div className={layout.contact.grid.root}>
          <ContactPanel />

          <div className={layout.contact.grid.stack}>
            <ContactLinks />

            <ContactAvailability />
          </div>
        </div>

        {/* FOOTER */}
        <ContactFooter />
      </div>
    </Section>
  );
}
