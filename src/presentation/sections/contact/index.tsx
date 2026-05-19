import { contactContent } from "@/content/contact";

import { rgba, ui } from "@/theme";

import type { ResolvedContactLayout } from "@/runtime/presentation/layout/contracts/page";
import ContactAvailability from "./ContactAvailability";
import ContactFooter from "./ContactFooter";
import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";

type Props = {
  layout: ResolvedContactLayout;
};

export default function Contact({ layout }: Props) {
  const { panel } = contactContent;

  return (
    <section
      id="contact"
      className={`
    relative
    isolate
    overflow-hidden

    ${layout.section}
  `}
    >
      <div className={layout.environment.root}>
        {/* ATMOSPHERIC BASE */}
        <div
          className={layout.environment.texture}
          style={{
            backgroundImage:
              "url('/textures/stone/photo-ground-texture-pattern.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* DARK VIGNETTE */}
        <div className={layout.environment.vignette} />

        {/* SOFT ATMOSPHERIC BLOOM */}
        <div
          className={layout.environment.bloom}
          style={{
            background:
              "radial-gradient(circle, rgba(90,180,255,0.22), transparent 72%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className={layout.content}>
        <ContactHero layout={layout.hero} />

        {/* CONTACT GRID */}
        <div className={layout.grid.root}>
          {/* LEFT */}
          <div className={layout.grid.left}>
            <div className={layout.panel.root}>
              {/* IMAGE */}
              <div
                className={layout.panel.image}
                style={{
                  backgroundImage:
                    "url('/textures/glass/nik-shuliahin-xE3S9mjUjqA-unsplash.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* DARK GRADIENT */}
              <div className={layout.panel.gradient} />

              {/* ATMOSPHERIC LIGHT */}
              <div
                className={layout.panel.bloom}
                style={{
                  background: `radial-gradient(circle, ${rgba.cyanBloomStrong}, transparent 70%)`,
                }}
              />

              {/* PANEL CONTENT */}
              <div className={layout.panel.content}>
                {/* TOP */}
                <div className={layout.panel.header}>
                  <div
                    className={`
                      text-[11px]
                      uppercase
                      tracking-[0.34em]

                      ${ui.text.context}
                    `}
                  >
                    {panel.label}
                  </div>

                  <div
                    className={`
                      max-w-[14ch]

                      text-3xl
                      leading-[1.1]

                      ${ui.text.interactive}
                    `}
                  >
                    {panel.title}
                  </div>
                </div>

                {/* BOTTOM */}
                <div
                  className={`
                    max-w-[26ch]

                    text-sm
                    leading-[1.9]

                    ${ui.text.tertiary}
                  `}
                >
                  {panel.description}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={layout.grid.right}>
            <ContactLinks layout={layout.links} />

            <ContactAvailability layout={layout.availability} />
          </div>
        </div>

        <ContactFooter layout={layout.footer} />
      </div>
    </section>
  );
}
