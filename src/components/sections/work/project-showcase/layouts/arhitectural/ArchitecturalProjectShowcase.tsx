import FadeIn from "@/components/motion/FadeIn";

import type { ProjectShowcaseProps } from "../../types";

import ProjectDivider from "../../shared/ProjectDivider";
import ProjectMeta from "../../shared/ProjectMeta";

import ArchitecturalHero from "./blocks/ArchitecturalHero";
import ArchitecturalMobile from "./blocks/ArchitecturalMobile";
import ArchitecturalServices from "./blocks/ArchitecturalServices";
import ArchitecturalShowcase from "./blocks/ArchitecturalShowcase";
import ArchitecturalSystems from "./blocks/ArchitecturalSystems";

export default function ArchitecturalProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <article className='relative'>
      {/* DIVIDER */}
      <ProjectDivider />

      {/* FLOW */}
      <div className='pt-20'>
        <div className='space-y-52 md:space-y-72'>
          {/* META */}
          <FadeIn>
            <ProjectMeta index={index} project={project} />
          </FadeIn>

          {/* HERO */}
          <ArchitecturalHero project={project} />

          {/* SERVICES */}
          <ArchitecturalServices project={project} />

          {/* SHOWCASE */}
          <ArchitecturalShowcase project={project} />

          {/* SYSTEMS */}
          <ArchitecturalSystems project={project} />

          {/* MOBILE */}
          <ArchitecturalMobile project={project} />
        </div>
      </div>
    </article>
  );
}
