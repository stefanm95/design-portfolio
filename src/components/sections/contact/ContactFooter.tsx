import FadeIn from "@/components/motion/FadeIn";

export default function ContactFooter() {
  return (
    <footer
      className='
        relative
        overflow-hidden
        px-6
        md:px-8
        border-t
        border-white/[0.05]

        py-10
        md:py-12
        lg:py-14
      '
    >
      {/* ATMOSPHERIC GRADIENT */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.06]
        '
        style={{
          background:
            "linear-gradient(90deg, rgba(90,180,255,0.12) 0%, transparent 38%, rgba(255,120,80,0.08) 100%)",
        }}
      />

      {/* NOISE / TEXTURE */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.04]
          mix-blend-screen
        '
        style={{
          backgroundImage:
            "url('/textures/stone/photo-ground-texture-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <FadeIn>
        <div
          className='
            relative
            z-10

            flex
            flex-col
            gap-10
            md:gap-12
            lg:gap-14

            lg:flex-row
            lg:items-end
            lg:justify-between
          '
        >
          {/* LEFT */}
          <div className='space-y-8'>
            <div
              className='
                text-[11px]
                uppercase
                tracking-[0.34em]

                text-white/22
              '
            >
              FINAL FRAME
            </div>

            <div
              className='
                max-w3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                leading-[0.95]

                text-white/8484
              '
            >
              Let’s build something memorable.
            </div>

            <p
              className='
                max-w-[34ch]

                text-sm
                leading-[1.9]

                text-white/34
              '
            >
              Focused on cinematic digital experiences, immersive presentation
              systems, and interaction-driven interfaces crafted with precision.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className='
              flex
              flex-col
              gap-8

              xl:items-end
            '
          >
            {/* CTA */}
            <a
              href='mailto:hello@yourstudio.dev'
              className='
                group
                inline-flex
                items-center
                gap-4

                border
                border-white/[0.08]

                px-6
                py-4

                text-[11px]
                uppercase
                tracking-[0.28em]

                text-white/70

                transition-all
                duration-500

                hover:border-white/[0.18]
                hover:bg-white/[0.03]
                hover:text-white
              '
            >
              Start a conversation
              <span
                className='
                  transition-transform
                  duration-500

                  group-hover:translate-x-1
                '
              >
                →
              </span>
            </a>

            {/* META */}
            <div
              className='
                flex
                flex-col
                gap-3

                text-[11px]
                uppercase
                tracking-[0.24em]

                text-white/16

                md:flex-row
                md:items-center
                md:gap-8
              '
            >
              <div>Designed & developed by Stefan Moise</div>

              <div>© 2026</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
