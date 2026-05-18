import { projects } from "@/content/projects";

import Section from "@/design/layout/Section";

import ProjectShowcase from "./ProjectShowcase";

import { resolveCompositionContract } from "@/runtime/presentation/composition";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import type { ProjectPresentation } from "@/types/presentation";
import { resolveLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolveLayoutRuntime";

type Props = {
  presentation: ProjectPresentation;
};

export default function SelectedWork({ presentation }: Props) {
  //
  // PROFILE
  //

  const profileVariant = presentation.composition?.profile ?? "immersive";

  const profile = resolveProfile(profileVariant);

  //
  // COMPOSITION
  //

  const composition = resolveCompositionContract(
    presentation,
    profile,
    profile.orchestration.sceneIntensity,
  );

  //
  // LAYOUT
  //

  const layout = resolveLayoutRuntime({
    composition,
  });

  const projectsLayout = layout.page.projects;

  //
  // RENDER
  //

  return (
    <Section
      id='projects'
      className={`
        relative
        overflow-hidden

        ${projectsLayout.section}
      `}
    >
      {/* ATMOSPHERIC BLOOM */}
      <div
        className={projectsLayout.bloom}
        style={{
          background:
            "radial-gradient(circle, rgba(126,87,255,0.16), transparent 72%)",
        }}
      />

      {/* CONTENT */}
      <div className={projectsLayout.content}>
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} index={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
