import FadeIn from "@/components/motion/FadeIn";

import ArchitecturalMobileCard from "./ArchitecturalMobileCard";

type Props = {
  images: string[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function ArchitecturalMobileCarousel({
  images,
  active,
  setActive,
}: Props) {
  return (
    <div
      className='
        relative

        flex
        items-center
        justify-center

        w-full
        min-h-[720px]
      '
    >
      {/* CENTER GLOW */}
      <div
        className='
          absolute
        

          h-[420px]
          w-[420px]

      

          rounded-full

          opacity-50
          blur-sm

          bg-[radial-gradient(circle,rgba(103,80,255,0.16),transparent_72%)]
        '
      />

      {/* STAGE */}
      <div
        className='
          relative

          flex
          items-center
          justify-center

          w-full
          max-w-[920px]
          h-[720px]
        '
      >
        {images.map((image, index) => {
          const isActive = index === active;

          const isLeft = index === (active - 1 + images.length) % images.length;

          const isRight = index === (active + 1) % images.length;

          return (
            <FadeIn key={image} delay={0.08 * index}>
              <ArchitecturalMobileCard
                image={image}
                isActive={isActive}
                isLeft={isLeft}
                isRight={isRight}
                onClick={() => setActive(index)}
              />
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
