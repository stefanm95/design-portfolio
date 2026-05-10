import FadeIn from "@/components/motion/FadeIn";

type Props = {
  images: string[];
};

export default function ArchitecturalMobileStack({ images }: Props) {
  return (
    <div
      className='
        relative

        flex
        flex-col

        gap-5
        sm:gap-6
        lg:gap-8
      '
    >
      {/* HERO FRAME */}
      <FadeIn>
        <div
          className='
            relative
            overflow-hidden

            min-h-[340px]
            sm:min-h-[420px]
            md:min-h-[520px]
            lg:min-h-[620px]
          '
        >
          {/* ATMOSPHERE */}
          <div
            className='
              absolute
              inset-0

              opacity-40
              blur-sm

              bg-[radial-gradient(circle_at_50%_30%,rgba(103,80,255,0.12),transparent_60%)]
            '
          />

          <img
            src={images[1]}
            alt=''
            className='
              relative
              z-[2]

              h-full
              w-full

              object-contain

              shadow-[0_30px_90px_rgba(0,0,0,0.4)]
            '
          />
        </div>
      </FadeIn>

      {/* SECONDARY ROW */}
      <div
        className='
          grid
          grid-cols-2

          items-start

          gap-4
          sm:gap-5
          md:gap-6
        '
      >
        {/* LEFT */}
        <FadeIn delay={0.08}>
          <div className='translate-y-6 sm:translate-y-8'>
            <img
              src={images[0]}
              alt=''
              className='
                w-full

                object-contain

                opacity-80

                shadow-[0_18px_50px_rgba(0,0,0,0.25)]
              '
            />
          </div>
        </FadeIn>

        {/* RIGHT */}
        <FadeIn delay={0.16}>
          <div className='-translate-y-2 sm:-translate-y-4'>
            <img
              src={images[2]}
              alt=''
              className='
                w-full

                object-contain

                opacity-80

                shadow-[0_18px_50px_rgba(0,0,0,0.25)]
              '
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
