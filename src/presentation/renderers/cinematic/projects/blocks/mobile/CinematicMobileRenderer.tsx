import type { PresentationBlockRendererProps } from "@/presentation/renderers/types";

import type { CinematicPresentationBlock } from "@/types";

import CinematicMobile from "./CinematicMobile";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicMobileRenderer({ project, runtime }: Props) {
  //
  // CONTENT
  //

  const images = project.media.mobile;

  //
  // LAYOUT
  //

  const layout = runtime.layout.project.cinematic.mobile;

  //
  // GUARD
  //

  if (!images?.length) {
    return null;
  }

  //
  // RENDER
  //

  return <CinematicMobile images={images} layout={layout} />;
}
