import ArchitecturalProjectShowcase from "@/presentation/presets/cinematic/projects/ArchitecturalProjectShowcase";
import type { ProjectShowcaseProps } from "../shared/types";
import EditorialProjectShowcase from "@/presentation/presets/editorial/projects/EditorialProjectShowcase";

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
