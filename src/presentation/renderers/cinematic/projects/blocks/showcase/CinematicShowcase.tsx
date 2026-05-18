"use client";

import { useState } from "react";

import type { CinematicPresentationBlock } from "@/types";

import type { PresentationBlockRendererProps } from "@/presentation/renderers/types";

import CinematicShowcaseDesktop from "./CinematicShowcaseDesktop";

import CinematicShowcaseMobile from "./CinematicShowcaseMobile";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicShowcase({
  project,
  block,
  index,
  runtime,
}: Props) {
  //
  // SHOWCASE
  //

  const showcase = project.media.showcase ?? [];

  //
  // STATE
  //

  const [active, setActive] = useState(0);

  //
  // GUARD
  //

  if (showcase.length < 2) {
    return null;
  }

  //
  // RENDER
  //

  return (
    <>
      <CinematicShowcaseDesktop
        project={project}
        block={block}
        index={index}
        runtime={runtime}
        active={active}
        setActive={setActive}
      />

      <CinematicShowcaseMobile
        project={project}
        block={block}
        index={index}
        runtime={runtime}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
