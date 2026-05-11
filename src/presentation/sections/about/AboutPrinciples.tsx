import FadeIn from "@/presentation/animation/FadeIn";
import { opacityClass, ui } from "@/theme";

export default function AboutPrinciples() {
  return (
    <section
      className='
        relative
        overflow-hidden

        py-24
        md:py-28
        lg:py-32
        xl:py-40
      '
    >
      {/* ATMOSPHERIC BASE */}
      <div
        className='
          absolute
          inset-0

          bg-transparent
        '
      />

      {/* STONE SLAB */}
      <div
        className='
          absolute

          left-[-140%]
          md:left-[-95%]
          xl:left-[-80%]

          top-1/2

          h-[140%]
          w-[400%]

          md:w-[240%]
          xl:w-[250%]

          -translate-y-1/2

          overflow-hidden

          rounded-r-[2rem]

          opacity-[0.22]
        '
      >
        <img
          src='/textures/stone/bekky-bekks-79k1zS6SnzY-unsplash.jpg'
          alt=''
          className='
            h-full
            w-full

            object-contain
            object-center

            scale-[0.82]
            md:scale-[0.78]
          '
        />

        {/* DARKEN */}
        <div
          className='
            absolute
            inset-0

            bg-black/45
          '
        />

        {/* LIGHT EDGE */}
        <div
          className={`
            absolute
            right-0
            top-0

            h-full
            w-px

            ${ui.dividers.subtle}
          `}
        />
      </div>

      {/* CYAN ATMOSPHERE */}
      <div
        className={`
          absolute

          left-[10%]
          md:left-[16%]
          xl:left-[22%]

          top-[48%]

          h-[18rem]
          w-[18rem]

          md:h-[22rem]
          md:w-[22rem]

          -translate-y-1/2

          rounded-full
          blur-sm

          ${opacityClass.subtle}
        `}
        style={{
          background:
            "radial-gradient(circle, rgba(80,180,255,0.28), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div
        className='
    relative
    z-10

    grid
    grid-cols-1

    px-6
    sm:px-8
    md:px-14
    lg:px-16
    xl:px-0

    gap-y-20

    xl:grid-cols-12
    xl:items-center
  '
      >
        {/* LEFT SPACER */}
        <div className='hidden xl:block xl:col-span-5' />

        {/* RIGHT CONTENT */}
        <div
          className='
      max-w-[720px]

      xl:col-span-6
      xl:col-start-7
    '
        >
          <div className='space-y-12 md:space-y-14'>
            <FadeIn>
              <div
                className={`
            text-[11px]
            uppercase
            tracking-[0.34em]

            ${ui.text.label}
          `}
              >
                EXPERIENCE PRINCIPLES
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h2
                className={`
            max-w-[12ch]

            text-[2rem]
            sm:text-[2.4rem]
            md:text-5xl
            lg:text-6xl

            leading-[0.92]
            tracking-[-0.05em]

            ${ui.text.primary}
          `}
              >
                Calm systems with cinematic intent.
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className={`
                max-w-[26ch]
    sm:max-w-[30ch]
    md:max-w-[34ch]

    text-[14px]
    md:text-[15px]

    leading-[1.85]

    ${ui.text.narrative}
  `}
              >
                Every interface is designed around pacing, atmosphere,
                hierarchy, and emotional clarity — creating experiences that
                feel composed rather than assembled.
              </p>
            </FadeIn>

            {/* PRINCIPLES */}
            <FadeIn delay={0.18}>
              <div
                className='
      grid
      grid-cols-1
      sm:grid-cols-2

      gap-x-10
      gap-y-4

      pt-6
      md:pt-8

      max-w-[28rem]
    '
              >
                {[
                  "Atmosphere",
                  "Editorial Rhythm",
                  "Spatial Composition",
                  "Motion Clarity",
                ].map((item) => (
                  <div
                    key={item}
                    className={`
          relative

          pl-4

          text-[11px]
          sm:text-[12px]

          uppercase
          tracking-[0.22em]

          ${ui.text.supporting}
        `}
                  >
                    {/* subtle marker */}
                    <div
                      className={`
            absolute
            left-0
            top-1/2

            h-px
            w-2

            -translate-y-1/2

            ${ui.dividers.marker}
          `}
                    />

                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
