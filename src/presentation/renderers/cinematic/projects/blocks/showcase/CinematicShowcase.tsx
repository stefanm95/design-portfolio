"use client";

import { useState } from "react";

import type { CinematicPresentationBlock } from "@/presentation/renderers/types";

import type { PresentationBlockRendererProps } from "@/presentation/renderers/types";

import CinematicShowcaseDesktop from "./CinematicShowcaseDesktop";
import CinematicShowcaseMobile from "./CinematicShowcaseMobile";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicShowcase({ project, block, index }: Props) {
  const showcase = project.media.showcase ?? [];

  const [active, setActive] = useState(0);

  if (showcase.length < 2) {
    return null;
  }

  return (
    <>
      <CinematicShowcaseDesktop
        project={project}
        block={block}
        index={index}
        active={active}
        setActive={setActive}
      />

      <CinematicShowcaseMobile
        project={project}
        block={block}
        index={index}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
