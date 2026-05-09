import FadeIn from "@/components/motion/FadeIn";

import type { ProjectShowcaseProps } from "../../types";

import ProjectAtmosphere from "./blocks/ProjectAtmosphere";
import ProjectEditorial from "./blocks/ProjectEditorial";
import ProjectHero from "./blocks/ProjectHero";
import ProjectUIDetail from "./blocks/ProjectUIDetail";

import ProjectDivider from "../../shared/ProjectDivider";
import ProjectMeta from "../../shared/ProjectMeta";

export default function EditorialProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <article className='relative'>
      <ProjectDivider />

      <div className='pt-20'>
        <div className='space-y-40 md:space-y-52'>
          {/* META */}
          <FadeIn>
            <ProjectMeta index={index} project={project} />
          </FadeIn>

          {/* HERO */}
          <div className='mt-24 md:mt-32'>
            <ProjectHero project={project} />
          </div>

          {/* EDITORIAL */}
          <div className='mt-40 md:mt-52'>
            <ProjectEditorial project={project} />
          </div>

          {/* ATMOSPHERE */}
          <div className='mt-28 md:mt-40'>
            <ProjectAtmosphere project={project} />
          </div>

          {/* UI */}
          <div className='mt-44 md:mt-56'>
            <ProjectUIDetail project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}
