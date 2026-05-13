import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Text from "@/design/typography/Text";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ProjectSectionLabel from "@/presentation/shared/ProjectSectionLabel";

import { projectComposition } from "@/runtime/presentation/composition";

import { ui } from "@/theme";

import type {
  EditorialPresentationBlock,
  PresentationBlockRendererProps,
} from "@/runtime/presentation/types";

type Props = PresentationBlockRendererProps<EditorialPresentationBlock>;

export default function EditorialShowcase({ project }: Props) {
  const editorial = project.media.editorial?.[0];

  const content = project.editorial?.showcase;

  const composition = projectComposition.editorial.showcase;

  if (!editorial || !content) {
    return null;
  }

  return (
    <FadeIn>
      <section className={composition.section}>
        {/* LEFT */}
        <div className={composition.left}>
          <div className={composition.leftInner}>
            <ProjectSectionLabel>{content.label}</ProjectSectionLabel>

            <Heading
              as="h3"
              className={`
                max-w-lg

                text-5xl
                md:text-6xl

                leading-[0.95]

                ${ui.text.primary}
              `}
            >
              {content.heading}
            </Heading>

            <Text
              className={`
                max-w-lg

                text-[15px]
                leading-[1.9]

                ${ui.text.link}
              `}
            >
              {content.description}
            </Text>
          </div>
        </div>

        {/* RIGHT */}
        <div className={composition.right}>
          <ProjectCinematicFrame
            image={editorial}
            alt={project.title}
            minHeight="min-h-[260px] sm:min-h-[340px] md:min-h-[420px] xl:min-h-[560px]"
          />
        </div>
      </section>
    </FadeIn>
  );
}
