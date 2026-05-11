import { useState } from "react";

import ArchitecturalShowcaseDesktop from "./ArchitecturalShowcaseDesktop";
import ArchitecturalShowcaseMobile from "./ArchitecturalShowcaseMobile";
import type { ProjectBlockProps } from "@/presentation/shared/types";

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
