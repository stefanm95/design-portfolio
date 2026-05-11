import FadeIn from "@/presentation/animation/FadeIn";

import type { ProjectShowcaseProps } from "@/presentation/types/projects";

import ArchitecturalHero from "./blocks/CinematicHero";
import ArchitecturalMobile from "./blocks/mobile/CinematicMobile";
import ArchitecturalShowcase from "./blocks/showcase/CinematicShowcase";
import ArchitecturalSystems from "./blocks/CinematicSystems";

import ProjectDivider from "@/presentation/shared/ProjectDivider";
import ProjectMeta from "@/presentation/shared/ProjectMeta";

export default function CinematicProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <article className='relative'>
      <ProjectDivider />

      <div
        className='space-y-16
          sm:space-y-20
          md:space-y-28
          lg:space-y-40
          xl:space-y-52
          '
      >
        {/* INTRO */}
        <FadeIn>
          <ProjectMeta project={project} index={index} />
        </FadeIn>

        {/* SPATIAL HERO */}
        <div className='mt-10 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-32'>
          <ArchitecturalHero project={project} />
        </div>
        {/* CURATED SHOWCASE */}
        <div className='mt-14 sm:mt-20 md:mt-28 lg:mt-40 xl:mt-52'>
          <ArchitecturalShowcase project={project} />
        </div>

        {/* PROCESS INSERT */}
        <div className='mt-14 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40'>
          <ArchitecturalSystems project={project} />
        </div>

        {/* DEVICE COMPOSITION */}
        <div className='mt-16 sm:mt-24 md:mt-32 lg:mt-48 xl:mt-56'>
          <ArchitecturalMobile project={project} />
        </div>
      </div>
    </article>
  );
}
