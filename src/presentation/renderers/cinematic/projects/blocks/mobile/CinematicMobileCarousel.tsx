import FadeIn from "@/presentation/animation/FadeIn";

import { rgba } from "@/theme";

import CinematicMobileCard from "./CinematicMobileCard";

type Props = {
  images: string[];

  active: number;

  setActive: React.Dispatch<React.SetStateAction<number>>;

  layout: {
    root: string;

    glow: string;

    stage: string;
  };
};

export default function CinematicMobileCarousel({
  images,
  active,
  setActive,
  layout,
}: Props) {
  return (
    <div className={layout.root}>
      {/* CENTER GLOW */}
      <div
        className={layout.glow}
        style={{
          background: `radial-gradient(circle, ${rgba.purpleShowcase}, transparent 72%)`,
        }}
      />

      {/* STAGE */}
      <div className={layout.stage}>
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
