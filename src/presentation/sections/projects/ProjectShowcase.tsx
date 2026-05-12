import ArchitecturalProjectShowcase from "@/presentation/renderers/cinematic/projects/CinematicProjectShowcase";
import EditorialProjectShowcase from "@/presentation/renderers/editorial/projects/EditorialProjectShowcase";
import type { ProjectShowcaseProps } from "@/types/projects";

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
