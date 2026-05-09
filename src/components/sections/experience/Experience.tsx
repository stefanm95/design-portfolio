import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import FadeIn from "@/components/motion/FadeIn";

import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import ExperienceVisual from "./ExperienceVisual";
import Heading from "@/components/typography/Heading";

export default function Experience() {
  return (
    <Section
      id='experience'
      className='relative overflow-hidden py-32 md:py-40 xl:py-48'
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div
        className='
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        '
      >
        {/* BLUE LIGHT */}
        <div
          className='
            absolute
            left-[8%]
            top-[10%]

            h-[620px]
            w-[620px]

            rounded-full
            blur-3xl

            bg-blue-500/10
          '
        />

        {/* WARM LIGHT */}
        <div
          className='
            absolute
            bottom-[0%]
            right-[0%]

            h-[720px]
            w-[720px]

            rounded-full
            blur-3xl

            bg-orange-400/10
          '
        />

        {/* CENTRAL VERTICAL LIGHT */}
        <div
          className='
            absolute
            left-1/2
            top-0

            h-full
            w-px

            -translate-x-1/2

            bg-gradient-to-b
            from-transparent
            via-white/10
            to-transparent
          '
        />

        {/* VIGNETTE */}
        <div
          className='
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]
          '
        />
      </div>

      <Container className='relative z-10'>
        <div
          className='
            grid
            items-center
            gap-24

            lg:grid-cols-[minmax(0,1.15fr)_520px]
          '
        >
          {/* LEFT SIDE */}
          <FadeIn>
            <div className='relative max-w-[760px]'>
              {/* LABEL */}
              <Label className='text-white/30'>Experience Systems</Label>

              {/* TITLE */}
              <div className='relative mt-8'>
                {/* SUBTLE GLOW */}
                <div
                  className='
          absolute
          -left-10
          top-10

          h-40
          w-40

          rounded-full
          blur-3xl

          bg-white/[0.03]
        '
                />

                <Heading
                  className='
                    relative
                    z-10

                    text-[clamp(4.6rem,7vw,6.8rem)]
                    leading-[0.9]
                    tracking-[-0.06em]

                    text-transparent
                    bg-clip-text

                    bg-[linear-gradient(180deg,rgba(240,244,248,0.98)_0%,rgba(210,220,228,0.92)_50%,rgba(214,195,161,0.88)_100%)]

                    drop-shadow-[0_0_30px_rgba(255,255,255,0.03)]
                  '
                >
                  <span className='block'>Designed</span>

                  <span className='block ml-[0.04em]'>beyond</span>

                  <span className='block'>interfaces.</span>
                </Heading>
              </div>

              {/* DIVIDER */}
              <div
                className='
        mt-10
        h-px
        w-24

        bg-gradient-to-r
        from-white/20
        to-transparent
      '
              />

              {/* DESCRIPTION */}
              <Text
                className='
        mt-8
        max-w-[420px]

        text-sm
        leading-[1.9]
        text-white/42
      '
              >
                Cinematic digital systems shaped through motion, atmosphere and
                spatial composition.
              </Text>

              {/* MINI TAGS */}
              <div
                className='
        mt-12

        flex
        flex-wrap
        gap-3
      '
              >
                {["Motion", "Editorial", "Spatial"].map((item) => (
                  <div
                    key={item}
                    className='
            border
            border-white/[0.08]

            bg-white/[0.03]

            px-4
            py-2

            text-[10px]
            uppercase
            tracking-[0.22em]
            text-white/38

            backdrop-blur-xl
          '
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <ExperienceVisual />
        </div>
      </Container>
    </Section>
  );
}
