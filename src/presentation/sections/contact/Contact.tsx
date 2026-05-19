// index.tsx

import { contactContent } from "@/content/contact";

import type { ResolvedContactLayout } from "@/runtime/presentation/layout/contracts/page";

import { rgba, ui } from "@/theme";

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
    <section id='contact' className={layout.root}>
      {/* ATMOSPHERIC BASE */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.06]
        '
        style={{
          backgroundImage:
            "url('/textures/stone/photo-ground-texture-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* DARK VIGNETTE */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.46)_100%)]
        '
      />

      {/* SOFT ATMOSPHERIC BLOOM */}
      <div
        className='
          absolute
          left-1/2
          top-[22%]

          h-[32rem]
          w-[32rem]

          -translate-x-1/2

          rounded-full
          blur-sm

          opacity-[0.08]
        '
        style={{
          background:
            "radial-gradient(circle, rgba(90,180,255,0.22), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className={layout.content}>
        {/* HERO */}
        <ContactHero layout={layout.hero} />

        {/* CONTACT GRID */}
        <div
          className='
            grid
            grid-cols-1
            lg:grid-cols-12

            gap-y-10
            md:gap-y-12
            lg:gap-y-0
            lg:gap-x-20
          '
        >
          {/* LEFT */}
          <div
            className='
              relative

              hidden
              lg:flex

              col-span-1
              lg:col-span-4

              min-h-[480px]
              md:min-h-[560px]
              lg:min-h-[620px]

              overflow-hidden
            '
          >
            <div className={layout.hero.card}>
              {/* IMAGE */}
              <div
                className='
                  absolute
                  inset-0

                  scale-[1.04]

                  opacity-[0.22]
                '
                style={{
                  backgroundImage:
                    "url('/textures/glass/nik-shuliahin-xE3S9mjUjqA-unsplash.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* DARK GRADIENT */}
              <div
                className='
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-black/10
                  via-black/45
                  to-black/80
                '
              />

              {/* ATMOSPHERIC LIGHT */}
              <div
                className='
                  absolute
                  left-[-10%]
                  top-[20%]

                  h-[18rem]
                  w-[18rem]

                  rounded-full
                  blur-sm

                  opacity-[0.12]
                '
                style={{
                  background: `radial-gradient(circle, ${rgba.cyanBloomStrong}, transparent 70%)`,
                }}
              />

              {/* PANEL CONTENT */}
              <div
                className='
                  relative
                  z-10

                  flex
                  h-full
                  flex-col
                  justify-between

                  p-10
                '
              >
                {/* TOP */}
                <div className={layout.hero.infoGroup}>
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
          <div className={layout.hero.right}>
            <ContactLinks layout={layout.links} />

            <ContactAvailability layout={layout.availability} />
          </div>
        </div>

        {/* FOOTER */}
        <ContactFooter layout={layout.footer} />
      </div>
    </section>
  );
}
