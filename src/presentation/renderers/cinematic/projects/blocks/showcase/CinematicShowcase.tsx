import { useState } from "react";

import type { ProjectBlockProps } from "@/types/projects";
import ArchitecturalShowcaseDesktop from "./CinematicShowcaseDesktop";
import ArchitecturalShowcaseMobile from "./CinematicShowcaseMobile";

export default function CinematicShowcase({ project }: ProjectBlockProps) {
  const showcase = project.media.showcase ?? [];

  const [active, setActive] = useState(0);

  if (showcase.length < 2) return null;

  return (
    <>
      <ArchitecturalShowcaseDesktop
        project={project}
        active={active}
        setActive={setActive}
      />

      <ArchitecturalShowcaseMobile
        project={project}
        active={active}
        setActive={setActive}
      />
    </>
  );
}
