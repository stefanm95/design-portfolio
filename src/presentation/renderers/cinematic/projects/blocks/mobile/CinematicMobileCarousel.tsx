import FadeIn from "@/presentation/animation/FadeIn";

import { projectComposition } from "@/runtime/presentation/composition";

import { rgba } from "@/theme";

import CinematicMobileCard from "./CinematicMobileCard";

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
  const composition = projectComposition.cinematic.mobile.carousel;

  return (
    <div className={composition.root}>
      {/* CENTER GLOW */}
      <div
        className={composition.glow}
        style={{
          background: `radial-gradient(circle, ${rgba.purpleShowcase}, transparent 72%)`,
        }}
      />

      {/* STAGE */}
      <div className={composition.stage}>
        {images.map((image, index) => {
          const isActive = index === active;

          const isLeft = index === (active - 1 + images.length) % images.length;

          const isRight = index === (active + 1) % images.length;

          return (
            <FadeIn key={image} delay={0.08 * index}>
              <CinematicMobileCard
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
