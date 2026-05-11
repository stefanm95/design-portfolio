import ArchitecturalProjectShowcase from "@/presentation/modes/cinematic/projects/ArchitecturalProjectShowcase";
import type { ProjectShowcaseProps } from "@/presentation/shared/types";
import EditorialProjectShowcase from "@/presentation/modes/editorial/projects/EditorialProjectShowcase";

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
