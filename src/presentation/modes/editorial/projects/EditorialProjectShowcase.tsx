import FadeIn from "@/components/motion/FadeIn";

import type { ProjectShowcaseProps } from "@/presentation/shared/types";

import EditorialAtmosphere from "./blocks/EditorialAtmosphere";
import EditorialShowcase from "./blocks/EditorialShowcase";
import EditorialHero from "./blocks/EditorialHero";
import EditorialUIDetail from "./blocks/EditorialUIDetail";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

export default function EditorialProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <article className='relative'>
      <ProjectDivider />

      <div className='pt-12 md:pt-16 lg:pt-20'>
        <div
          className='
            space-y-16
            sm:space-y-20
            md:space-y-28
            lg:space-y-40
            xl:space-y-52
          '
        >
          {/* META */}
          <FadeIn>
            <ProjectMeta index={index} project={project} />
          </FadeIn>

          {/* HERO */}
          <div className='mt-10 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-32'>
            <EditorialHero project={project} />
          </div>

          {/* EDITORIAL */}
          <div className='mt-14 sm:mt-20 md:mt-28 lg:mt-40 xl:mt-52'>
            <EditorialShowcase project={project} />
          </div>

          {/* ATMOSPHERE */}
          <div className='mt-14 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40'>
            <EditorialAtmosphere project={project} />
          </div>

          {/* UI */}
          <div className='mt-16 sm:mt-24 md:mt-32 lg:mt-48 xl:mt-56'>
            <EditorialUIDetail project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}
