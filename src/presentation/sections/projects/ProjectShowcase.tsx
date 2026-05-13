import PresentationRuntime from "@/runtime/presentation/orchestration/PresentationRuntime";

import type { ProjectShowcaseProps } from "@/types/projects";

export default function ProjectShowcase({
  project,
  index,
}: ProjectShowcaseProps) {
  return (
    <PresentationRuntime
      project={project}
      presentation={project.presentation}
      index={index}
    />
  );
}
