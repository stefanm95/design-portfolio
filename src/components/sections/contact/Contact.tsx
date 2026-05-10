import ContactAvailability from "./ContactAvailability";
import ContactFooter from "./ContactFooter";
import ContactHero from "./ContactHero";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <section
      className='
        relative
        overflow-hidden
      '
    >
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
      <div
        className='
          relative
          z-10

          flex
          flex-col

          gap-16
          md:gap-20
          lg:gap-28

          py-20
          md:py-24
          lg:py-28
          xl:py-36
        '
      >
        {/* HERO */}
        <ContactHero />

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
      blur-3xl

      opacity-[0.12]
    '
              style={{
                background:
                  "radial-gradient(circle, rgba(90,180,255,0.28), transparent 70%)",
              }}
            />

            {/* CONTENT */}
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
              <div className='space-y-6'>
                <div
                  className='
          text-[11px]
          uppercase
          tracking-[0.34em]

          text-white/30
        '
                >
                  CONTACT
                </div>

                <div
                  className='
          max-w-[14ch]

          text-3xl
          leading-[1.1]

          text-white/78
        '
                >
                  Building immersive digital experiences with cinematic
                  precision.
                </div>
              </div>

              {/* BOTTOM */}
              <div
                className='
        max-w-[26ch]

        text-sm
        leading-[1.9]

        text-white/38
      '
              >
                Focused on interaction atmosphere, visual pacing, editorial
                structure, and presentation-driven interfaces.
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className='col-span-1 lg:col-span-8 space-y-12 md:space-y-16 lg:space-y-20'>
            <ContactLinks />
            <div className='px-0 lg:px-0'>
              <ContactAvailability />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <ContactFooter />
      </div>
    </section>
  );
}
