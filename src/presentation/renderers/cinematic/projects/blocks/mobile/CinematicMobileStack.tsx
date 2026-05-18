import FadeIn from "@/presentation/animation/FadeIn";

import { useTheme } from "@/theme";

type Props = {
  images: string[];

  layout: {
    root: string;

    main: string;

    mainGlow: string;

    mainImage: string;

    overlay: string;

    secondaryGrid: string;

    secondary: string;

    secondaryImage: string;
  };
};

export default function CinematicMobileStack({ images, layout }: Props) {
  //
  // THEME
  //

  const { theme } = useTheme();

  const overlaysGradients = theme.gradients.overlays;

  //
  // RENDER
  //

  return (
    <div className={layout.root}>
      {/* MAIN VISUAL */}
      <FadeIn>
        <div className={layout.main}>
          {/* ATMOSPHERIC GLOW */}
          <div className={layout.mainGlow} />

          <img src={images[1]} alt='' className={layout.mainImage} />

          {/* CINEMATIC OVERLAY */}
          <div
            className={`
              ${layout.overlay}
              ${overlaysGradients.cinematic}
            `}
          />
        </div>
      </FadeIn>

      {/* SECONDARY ROW */}
      <div className={layout.secondaryGrid}>
        <FadeIn delay={0.08}>
          <div className={layout.secondary}>
            <img src={images[0]} alt='' className={layout.secondaryImage} />
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className={layout.secondary}>
            <img src={images[2]} alt='' className={layout.secondaryImage} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
