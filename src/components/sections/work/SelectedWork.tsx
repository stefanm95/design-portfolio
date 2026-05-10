import Section from "@/components/layout/Section";

import { projects } from "@/data/projects";

import ProjectShowcase from "./project-showcase/ProjectShowcase";

export default function SelectedWork() {
  return (
    <Section className='relative overflow-hidden py-32 md:py-40 lg:py-48 xl:py-56'>
      {/* ATMOSPHERIC PURPLE BLOOM */}
      <div
        className='
          pointer-events-none
          absolute
          left-[-10%]
          top-[10%]

          h-[40vw]
          w-[40vw]

          rounded-full
          blur-3xl

          opacity-10
        '
        style={{
          background:
            "radial-gradient(circle, rgba(126,87,255,0.16), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className='relative z-10 space-y-32 md:space-y-40 lg:space-y-48 xl:space-y-56'>
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} index={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
