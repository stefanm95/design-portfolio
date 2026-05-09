import type { ProjectShowcaseProps } from "./shared/types";

import ArchitecturalProjectShowcase from "./layouts/arhitectural/ArchitecturalProjectShowcase";

import EditorialProjectShowcase from "./layouts/editorial/EditorialProjectShowcase";

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const { project } = props;

  switch (project.layout) {
    case "architectural":
      return <ArchitecturalProjectShowcase {...props} />;

    case "editorial":
    default:
      return <EditorialProjectShowcase {...props} />;
  }
}
