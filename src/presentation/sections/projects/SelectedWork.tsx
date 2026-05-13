import { projects } from "@/content/projects";

import Section from "@/design/layout/Section";

import { sectionSpacing } from "@/runtime/presentation/composition";

import ProjectShowcase from "./ProjectShowcase";

export default function SelectedWork() {
  return (
    <Section
      id="projects"
      className={`
        relative
        overflow-hidden

        ${sectionSpacing.projects.root}
      `}
    >
      {/* ATMOSPHERIC PURPLE BLOOM */}
      <div
        className={sectionSpacing.projects.bloom}
        style={{
          background:
            "radial-gradient(circle, rgba(126,87,255,0.16), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className={sectionSpacing.projects.content}>
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} index={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
