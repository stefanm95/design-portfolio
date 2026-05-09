import FadeIn from "@/components/motion/FadeIn";

export default function AboutPrinciples() {
  return (
    <section
      className='
        relative
        overflow-hidden

        py-32
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

          left-[-80%]
          top-1/2

          h-[140%]
          w-[250%]

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

            scale-80
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
            w-[1px]

            bg-white/10
          '
        />
      </div>

      {/* ATMOSPHERIC CYAN */}
      <div
        className='
          absolute

          left-[22%]
          top-[48%]

          h-[22rem]
          w-[22rem]

          -translate-y-1/2

          rounded-full
          blur-sm

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
          grid-cols-12

          items-center
          gap-y-20
        '
      >
        {/* LEFT EMPTY SPACE */}
        <div className='hidden xl:block xl:col-span-5' />

        {/* RIGHT CONTENT */}
        <div className='col-span-12 xl:col-span-6 xl:col-start-7'>
          <div className='space-y-14'>
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

                  text-4xl
                  leading-[0.95]

                  text-white/92

                  md:text-6xl
                '
              >
                Calm systems with cinematic intent.
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className='
                  max-w-[34ch]

                  text-base
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

                  gap-x-8
                  gap-y-5

                  pt-6
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
