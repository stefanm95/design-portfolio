import FadeIn from "@/components/motion/FadeIn";
import Display from "@/components/typography/Display";
import Heading from "@/components/typography/Heading";

export default function ContactHero() {
  return (
    <section
      className='
        relative
        overflow-hidden

        py-40
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
          top-[20%]

          h-[34rem]
          w-[34rem]

          rounded-full
          blur-3xl

          opacity-[0.10]
        '
        style={{
          background:
            "radial-gradient(circle, rgba(90,180,255,0.24), transparent 72%)",
        }}
      />

      {/* VERTICAL LINE */}
      <div
        className='
          absolute
          left-1/2
          top-0

          hidden
          xl:block

          h-full
          w-px

          bg-white/[0.04]
        '
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
                className='
                  text-[32px]
                  
                  uppercase
                    tracking-[0.28em]

                  text-white/24
                '
              >
                CONTACT
              </Heading>
            </FadeIn>

            <FadeIn delay={0.06}>
              <Display
                className='
                  max-w-[11ch]

                  text-5xl
                  leading-[0.92]

                  text-white/92

                  md:text-7xl
                  xl:text-[6.5rem]
                '
              >
                Designed with atmosphere and intent.
              </Display>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p
                className='
                  max-w-[34ch]

                  text-base
                  leading-[1.9]

                  text-white/38
                '
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
              className='
                space-y-8

                border-t
                border-white/[0.08]

                pt-8
              '
            >
              <div className='space-y-2'>
                <div
                  className='
                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    text-white/22
                  '
                >
                  Email
                </div>

                <a
                  href='mailto:your@email.com'
                  className='
                    text-lg
                    text-white/82

                    transition-opacity
                    duration-500

                    hover:opacity-60
                  '
                >
                  your@email.com
                </a>
              </div>

              <div className='space-y-2'>
                <div
                  className='
                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    text-white/22
                  '
                >
                  Availability
                </div>

                <p className='text-white/54'>
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
