import { ProjectPresentationRenderer } from "@/presentation/renderers";

import type { ProjectShowcaseProps } from "@/types/projects";

import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts";

type Props = ProjectShowcaseProps & {
  snapshot: PresentationRuntimeSnapshot;
};

export default function ProjectShowcase({ project, index, snapshot }: Props) {
  return (
    <ProjectPresentationRenderer
      project={project}
      presentation={project.presentation}
      snapshot={snapshot}
      index={index}
    />
  );
}
