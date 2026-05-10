import FadeIn from "@/components/motion/FadeIn";

export default function ContactAvailability() {
  return (
    <FadeIn delay={0.12}>
      <div
        className='
          relative

          border-t
          border-white/[0.06]
          px-8
          pt-8
        '
      >
        {/* SOFT GLOW */}
        <div
          className='
            absolute
            left-0
            top-0

            h-px
            w-24

            bg-cyan-300/30
          '
        />

        <div className='space-y-4'>
          <div
            className='
              text-[11px]
              uppercase
              tracking-[0.28em]

              text-white/24
            '
          >
            Availability
          </div>

          <p
            className='
              max-w-[28ch]

              leading-[1.9]

              text-white/48
            '
          >
            Currently focused on selected cinematic, editorial, and
            presentation-oriented digital experiences.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
