import FadeIn from "@/presentation/animation/FadeIn";
import { rgba } from "@/theme";
import ArchitecturalMobileCard from "./CinematicMobileCard";

type Props = {
  images: string[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function CinematicMobileCarousel({
  images,
  active,
  setActive,
}: Props) {
  return (
    <div className='relative flex items-center justify-center md:bottom-40 md:left-20 xl:bottom-0 w-full min-h-[560px] lg:min-h-[620px] xl:min-h-[720px] '>
      {/* CENTER GLOW */}
      <div
        className='absolute h-[420px] w-[420px] rounded-full opacity-50 blur-sm'
        style={{
          background: `radial-gradient(circle, ${rgba.purpleShowcase}, transparent 72%)`,
        }}
      />
      {/* STAGE */}
      <div className='relative flex items-center justify-center w-full max-w-[920px] h-[720px] '>
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
