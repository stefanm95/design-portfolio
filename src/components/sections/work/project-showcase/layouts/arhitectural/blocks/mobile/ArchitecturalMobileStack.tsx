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
      '
    >
      {/* MAIN */}
      <FadeIn>
        <div className='relative overflow-hidden'>
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

              w-full
              object-cover

              shadow-[0_30px_90px_rgba(0,0,0,0.4)]
            '
          />
        </div>
      </FadeIn>

      {/* SECONDARY ROW */}
      <div className='grid grid-cols-2 gap-4'>
        <FadeIn delay={0.08}>
          <img
            src={images[0]}
            alt=''
            className='
              w-full
              object-cover

              opacity-80

              shadow-[0_18px_50px_rgba(0,0,0,0.25)]
            '
          />
        </FadeIn>

        <FadeIn delay={0.16}>
          <img
            src={images[2]}
            alt=''
            className='
              w-full
              object-cover

              opacity-80

              shadow-[0_18px_50px_rgba(0,0,0,0.25)]
            '
          />
        </FadeIn>
      </div>
    </div>
  );
}
