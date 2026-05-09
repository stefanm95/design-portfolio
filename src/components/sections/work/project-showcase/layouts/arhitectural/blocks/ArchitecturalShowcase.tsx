import { useState } from "react";

import type { ProjectBlockProps } from "../../../types";

import ArchitecturalShowcaseDesktop from "./ArchitecturalShowcaseDesktop";
import ArchitecturalShowcaseMobile from "./ArchitecturalShowcaseMobile";

export default function ArchitecturalShowcase({ project }: ProjectBlockProps) {
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
