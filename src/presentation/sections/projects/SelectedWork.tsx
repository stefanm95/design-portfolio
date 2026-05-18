import { projects } from "@/content/projects";

import Section from "@/design/layout/Section";

import { resolveLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolveLayoutRuntime";

import ProjectShowcase from "./ProjectShowcase";

export default function SelectedWork() {
  const layout = resolveLayoutRuntime();

  return (
    <Section
      id='projects'
      className={`
        relative
        overflow-hidden

        ${layout.projects.section}
      `}
    >
      {/* ATMOSPHERIC PURPLE BLOOM */}
      <div
        className={layout.projects.bloom}
        style={{
          background:
            "radial-gradient(circle, rgba(126,87,255,0.16), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className={layout.projects.content}>
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} index={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
