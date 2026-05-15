import { ProjectPresentationRenderer } from "@/presentation/renderers";

import type { ProjectShowcaseProps } from "@/types/projects";

export default function ProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <ProjectPresentationRenderer
      project={project}
      presentation={project.presentation}
      index={index}
    />
  );
}
