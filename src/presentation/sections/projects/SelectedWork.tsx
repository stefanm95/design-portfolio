import { projects } from "@/content/projects";

import Section from "@/design/layout/Section";

import ProjectShowcase from "./ProjectShowcase";

import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts";

type Props = {
  snapshot: PresentationRuntimeSnapshot;

  className?: string;
};

export default function SelectedWork({ snapshot, className }: Props) {
  //
  // LAYOUT
  //

  const layout = snapshot.layout.page.projects;

  //
  // RENDER
  //

  return (
    <Section
      id="projects"
      className={`
        relative
        overflow-hidden

        ${layout.section}

        ${className ?? ""}
      `}
    >
      {/* ATMOSPHERIC BLOOM */}
      <div
        className={layout.bloom}
        style={{
          background:
            "radial-gradient(circle, rgba(126,87,255,0.16), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className={layout.content}>
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            index={index}
            project={project}
            snapshot={snapshot}
          />
        ))}
      </div>
    </Section>
  );
}
