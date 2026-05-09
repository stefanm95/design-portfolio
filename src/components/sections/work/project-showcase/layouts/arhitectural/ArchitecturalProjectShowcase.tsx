import FadeIn from "@/components/motion/FadeIn";

import type { ProjectShowcaseProps } from "../../shared/types";

import ArchitecturalHero from "./blocks/ArchitecturalHero";
import ArchitecturalMobile from "./blocks/mobile/ArchitecturalMobile";
import ArchitecturalShowcase from "./blocks/showcase/ArchitecturalShowcase";
import ArchitecturalSystems from "./blocks/ArchitecturalSystems";

import ProjectDivider from "../../shared/ProjectDivider";
import ProjectMeta from "../../shared/ProjectMeta";

export default function ArchitecturalProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <article className='relative'>
      <ProjectDivider />

      <div className='space-y-56 pt-20 md:space-y-72'>
        {/* INTRO */}
        <FadeIn>
          <ProjectMeta project={project} index={index} />
        </FadeIn>

        {/* SPATIAL HERO */}
        <ArchitecturalHero project={project} />

        {/* CURATED SHOWCASE */}
        <ArchitecturalShowcase project={project} />

        {/* PROCESS INSERT */}
        <ArchitecturalSystems project={project} />

        {/* DEVICE COMPOSITION */}
        <ArchitecturalMobile project={project} />
      </div>
    </article>
  );
}
