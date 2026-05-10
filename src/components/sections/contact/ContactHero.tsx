import FadeIn from "@/components/motion/FadeIn";
import Display from "@/components/typography/Display";
import Heading from "@/components/typography/Heading";
import { ui } from "@/theme";

export default function ContactHero() {
  return (
    <section
      className='
        relative
        overflow-hidden

        py-28
        md:py-32
        lg:py-40
        xl:py-56
      '
    >
      {/* BASE */}
      <div
        className='
          absolute
          inset-0
        '
        style={{
          backgroundImage:
            "url('/textures/stone/photo-ground-texture-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />

      {/* ATMOSPHERIC GRADIENT */}
      <div
        className='
          absolute

          left-[-10%]
          md:left-[-8%]
          lg:left-[-10%]
          top-[20%]

          h-[28rem]
          md:h-[30rem]
          lg:h-[34rem]
          w-[28rem]
          md:w-[30rem]
          lg:w-[34rem]

          rounded-full
          blur-sm

          opacity-[0.10]
        '
        style={{
          background:
            "radial-gradient(circle, rgba(90,180,255,0.24), transparent 72%)",
        }}
      />

      {/* VERTICAL LINE */}
      <div
        className={`
          absolute
          left-1/2
          top-0

          hidden
          xl:block

          h-full
          w-px

          ${ui.dividers.faint}
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
                  md:text-sm
                  text-base
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
                ${ui.borders.focus}

                ${ui.borders.focusMd}

                pt-8
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
                    ${ui.text.interactive}

                    transition-opacity
                    duration-500

                    hover:opacity-60
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
