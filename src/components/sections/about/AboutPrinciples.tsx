import FadeIn from "@/components/motion/FadeIn";

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
          w-[280%]

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
          className='
            absolute
            right-0
            top-0

            h-full
            w-px

            bg-white/10
          '
        />
      </div>

      {/* CYAN ATMOSPHERE */}
      <div
        className='
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
          blur-3xl

          opacity-[0.08]
        '
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

          gap-y-20

          lg:grid-cols-12
          lg:items-center
        '
      >
        {/* LEFT SPACER */}
        <div className='hidden lg:block lg:col-span-5' />

        {/* RIGHT CONTENT */}
        <div className='col-span-1 lg:col-span-6 lg:col-start-7'>
          <div className='space-y-12 md:space-y-14'>
            <FadeIn>
              <div
                className='
                  text-[11px]
                  uppercase
                  tracking-[0.34em]

                  text-white/28
                '
              >
                EXPERIENCE PRINCIPLES
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h2
                className='
                  max-w-[12ch]

                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl

                  leading-[0.95]

                  text-white/92
                '
              >
                Calm systems with cinematic intent.
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className='
                  max-w-[34ch]

                  text-[15px]
                  leading-[1.9]

                  text-white/42
                '
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
                  flex
                  flex-wrap

                  gap-x-6
                  gap-y-4

                  pt-6

                  md:gap-x-8
                  md:gap-y-5
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
                    className='
                      text-sm
                      tracking-[0.18em]

                      text-white/58
                    '
                  >
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
