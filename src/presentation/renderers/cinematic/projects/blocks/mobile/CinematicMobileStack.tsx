import FadeIn from "@/presentation/animation/FadeIn";

import { projectComposition } from "@/runtime/presentation/composition";

import { useTheme } from "@/theme";

type Props = {
  images: string[];
};

export default function CinematicMobileStack({ images }: Props) {
  const { theme } = useTheme();

  const overlaysGradients = theme.gradients.overlays;

  const composition = projectComposition.cinematic.mobile.stack;

  return (
    <div className={composition.root}>
      {/* MAIN VISUAL */}
      <FadeIn>
        <div className={composition.main}>
          {/* ATMOSPHERIC GLOW */}
          <div className={composition.mainGlow} />

          <img src={images[1]} alt="" className={composition.mainImage} />

          {/* CINEMATIC OVERLAY */}
          <div
            className={`
              ${composition.overlay}
              ${overlaysGradients.cinematic}
            `}
          />
        </div>
      </FadeIn>

      {/* SECONDARY ROW */}
      <div className={composition.secondaryGrid}>
        <FadeIn delay={0.08}>
          <div className={composition.secondary}>
            <img
              src={images[0]}
              alt=""
              className={composition.secondaryImage}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className={composition.secondary}>
            <img
              src={images[2]}
              alt=""
              className={composition.secondaryImage}
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
