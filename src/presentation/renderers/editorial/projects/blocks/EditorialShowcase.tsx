import FadeIn from "@/presentation/animation/FadeIn";

import Heading from "@/design/typography/Heading";
import Text from "@/design/typography/Text";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ProjectSectionLabel from "@/presentation/shared/ProjectSectionLabel";

import { ui } from "@/theme";

import type { PresentationBlockRendererProps } from "@/presentation/renderers/types";

import type { EditorialPresentationBlock } from "@/types";

type Props = PresentationBlockRendererProps<EditorialPresentationBlock>;

export default function EditorialShowcase({ project, runtime }: Props) {
  const editorial = project.media.editorial?.[0];

  const content = project.editorial?.showcase;

  const layout = runtime.layout.project.editorial.showcase;

  if (!editorial || !content) {
    return null;
  }

  return (
    <FadeIn>
      <section className={layout.section}>
        {/* LEFT */}
        <div className={layout.left}>
          <div className={layout.leftInner}>
            <ProjectSectionLabel>{content.label}</ProjectSectionLabel>

            <Heading
              as='h3'
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
        <div className={layout.right}>
          <ProjectCinematicFrame
            image={editorial}
            alt={project.title}
            minHeight='min-h-[260px] sm:min-h-[340px] md:min-h-[420px] xl:min-h-[560px]'
          />
        </div>
      </section>
    </FadeIn>
  );
}
