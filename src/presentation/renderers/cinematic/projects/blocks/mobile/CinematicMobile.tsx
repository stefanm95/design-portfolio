"use client";

import { useState } from "react";

import CinematicMobileCarousel from "./CinematicMobileCarousel";
import CinematicMobileStack from "./CinematicMobileStack";

type Props = {
  images: string[];

  layout: {
    section: string;

    environment: string;

    grid: string;

    visuals: string;

    tablet: string;

    desktop: string;

    content: string;

    contentInner: string;

    carousel: {
      root: string;

      glow: string;

      stage: string;
    };

    stack: {
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
};

export default function CinematicMobile({ images, layout }: Props) {
  //
  // STATE
  //

  const [active, setActive] = useState(0);

  //
  // GUARD
  //

  if (images.length < 3) {
    return null;
  }

  //
  // RENDER
  //

  return (
    <section className={layout.section}>
      <div className={layout.environment} />

      <div className={layout.grid}>
        {/* MOBILE / TABLET */}
        <div className={layout.tablet}>
          <CinematicMobileCarousel
            images={images}
            active={active}
            setActive={setActive}
            layout={layout.carousel}
          />
        </div>

        {/* DESKTOP */}
        <div className={layout.desktop}>
          <CinematicMobileStack images={images} layout={layout.stack} />
        </div>
      </div>
    </section>
  );
}
