import { useState } from "react";

import Heading from "@/design/typography/Heading";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import RightSideVisual from "@/design/visuals/RightSideVisual";

import { projectComposition } from "@/runtime/presentation/composition";

import { ui } from "@/theme";

import type {
  CinematicPresentationBlock,
  PresentationBlockRendererProps,
} from "@/runtime/presentation/types";

import CinematicMobileCarousel from "./CinematicMobileCarousel";
import CinematicMobileStack from "./CinematicMobileStack";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicMobile({ project, block, index }: Props) {
  const mobile = project.media.mobile ?? [];

  const content = project.cinematic?.mobile;

  const [active, setActive] = useState(1);

  const composition = projectComposition.cinematic.mobile;

  if (mobile.length < 3 || !content) {
    return null;
  }

  return (
    <section className={composition.section}>
      <div className={composition.environment}>
        <RightSideVisual />
      </div>

      <div className={composition.grid}>
        {/* VISUALS */}
        <div className={composition.visuals}>
          {/* TABLET */}
          <div className={composition.tablet}>
            <CinematicMobileStack images={mobile} />
          </div>

          {/* DESKTOP */}
          <div className={composition.desktop}>
            <CinematicMobileCarousel
              images={mobile}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className={composition.content}>
          <div className={composition.contentInner}>
            <Label>{content.label}</Label>

            <Heading
              as="h3"
              className="
                max-w-[10ch]

                text-3xl
                sm:text-4xl
                md:text-5xl
                xl:text-6xl
              "
            >
              {content.heading}
            </Heading>

            <Text
              className={`
                max-w-[32ch]
                leading-[1.9]

                ${ui.text.narrative}
              `}
            >
              {content.description}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
