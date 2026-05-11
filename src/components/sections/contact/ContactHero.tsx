import FadeIn from "@/components/motion/FadeIn";

import Display from "@/components/typography/Display";
import Heading from "@/components/typography/Heading";

import { useTheme, ui } from "@/theme";

export default function ContactHero() {
  const { theme } = useTheme();

  const scene = theme.scenes.contact;

  return (
    <section
      className={`
        relative
        overflow-hidden

        ${scene.layout.sectionPadding}
      `}
    >
      {/* BASE TEXTURE */}
      <div
        className={`
          absolute
          inset-0

          ${scene.texture.opacity}
        `}
        style={{
          backgroundImage: `url(${scene.texture.image})`,
          backgroundSize: scene.texture.size,
          backgroundPosition: scene.texture.position,
        }}
      />

      {/* ATMOSPHERIC LIGHT */}
      <div
        className={`
          absolute
          rounded-full
          blur-sm

          ${scene.atmosphere.primary.position}
          ${scene.atmosphere.primary.size}
          ${scene.atmosphere.primary.opacity}
        `}
        style={{
          background: scene.atmosphere.primary.background,
        }}
      />

      {/* VERTICAL DIVIDER */}
      <div
        className={`
          absolute
          left-1/2
          top-0

          h-full

          border-l

          ${scene.dividers.vertical.visibility}
          ${scene.dividers.vertical.width}
          ${scene.dividers.vertical.color}
        `}
      />

      {/* CONTENT */}
      <div
        className='
          relative
          z-10

          grid
          grid-cols-12

          gap-y-20
        '
      >
        {/* LEFT */}
        <div className='col-span-12 xl:col-span-7'>
          <div className='space-y-10 px-8'>
            <FadeIn>
              <Heading
                className={`
                  text-[32px]

                  uppercase
                  tracking-[0.28em]

                  ${ui.text.metadata}
                `}
              >
                CONTACT
              </Heading>
            </FadeIn>

            <FadeIn delay={0.06}>
              <Display
                className={`
                  max-w-[11ch]

                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-[6.5rem]

                  leading-[0.92]

                  ${ui.text.primary}
                `}
              >
                Designed with atmosphere and intent.
              </Display>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className={`
                  max-w-[34ch]

                  text-base
                  md:text-sm

                  leading-[1.9]

                  ${ui.text.tertiary}
                `}
              >
                I build cinematic digital experiences focused on pacing,
                interaction clarity, editorial composition, and immersive
                storytelling.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* RIGHT */}
        <div className='col-span-12 px-8 xl:col-span-4 xl:col-start-9'>
          <FadeIn delay={0.18}>
            <div
              className={`
                space-y-8

                border-t
                pt-8

                ${ui.borders.focus}
                ${ui.borders.focusMd}
              `}
            >
              <div className='space-y-2'>
                <div
                  className={`
                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    ${ui.text.annotation}
                  `}
                >
                  Email
                </div>

                <a
                  href='mailto:your@email.com'
                  className={`
                    text-lg

                    transition-opacity
                    duration-500

                    hover:opacity-60

                    ${ui.text.interactive}
                  `}
                >
                  your@email.com
                </a>
              </div>

              <div className='space-y-2'>
                <div
                  className={`
                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    ${ui.text.annotation}
                  `}
                >
                  Availability
                </div>

                <p className={ui.text.supporting}>
                  Available for selected freelance projects.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
