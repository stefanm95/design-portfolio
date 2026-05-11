import { ArrowUpRight } from "lucide-react";

import Display from "@/components/typography/Display";
import Text from "@/components/typography/Text";
import { ui } from "@/theme";
import type { ProjectBlockProps } from "../types/projects";

type Props = ProjectBlockProps & {
  index: number;
};

export default function ProjectMeta({ project, index }: Props) {
  return (
    <div className='relative'>
      {/* MOBILE INDEX */}
      <div
        className={`
          absolute
          left-0
          top-1

          text-[11px]
          tracking-[0.3em]

          ${ui.text.metadata}

          lg:hidden
        `}
      >
        {(index + 1).toString().padStart(2, "0")}
      </div>

      <div
        className='
          grid
          grid-cols-1
          md:grid-cols-12

          gap-y-8
          md:gap-y-14
          lg:gap-x-10
        '
      >
        {/* DESKTOP INDEX */}
        <div className='hidden lg:block lg:col-span-2'>
          <div
            className={`
              text-[11px]
              tracking-[0.3em]

              ${ui.text.metadata}
            `}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>
        </div>

        {/* TITLE */}
        <div className='col-span-1 md:col-span-12 lg:col-span-6'>
          <div className='space-y-6 pl-10 lg:pl-0'>
            <Display
              as='h2'
              variant='secondary'
              className='
                max-w-[32ch]

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-[7.5rem]

                leading-[0.98]
                md:leading-[0.9]
              '
            >
              {project.title}
            </Display>

            <Text
              className={`
                text-[13px]
                uppercase
                tracking-[0.28em]

                ${ui.text.caption}
              `}
            >
              {project.subtitle}
            </Text>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className='col-span-12 md:col-span-12 lg:col-span-4'>
          <div className='space-y-10'>
            <Text
              className={`
                max-w-[34ch]

                text-sm
                md:text-base
                lg:text-[15px]

                leading-[1.95]

                ${ui.text.narrative}
              `}
            >
              {project.description}
            </Text>

            <div
              className='
                flex
                flex-wrap

                gap-x-10
                gap-y-6
              '
            >
              <div className='space-y-2'>
                <div
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.24em]
                    ${ui.text.annotation}
                  `}
                >
                  Stack
                </div>

                <Text className={ui.text.paragraph}>
                  {project.stack.join(" / ")}
                </Text>
              </div>

              <div className='space-y-2'>
                <div
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.24em]
                    ${ui.text.annotation}
                  `}
                >
                  Year
                </div>

                <Text className={ui.text.paragraph}>{project.year}</Text>
              </div>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className={`
                  group/link

                  inline-flex
                  items-center
                  gap-3

                  pt-4

                  text-[11px]
                  uppercase
                  tracking-[0.28em]

                  ${ui.text.link}

                  transition-colors
                  duration-500

                  ${ui.text.hover}
                `}
              >
                <span>Launch Experience</span>

                <ArrowUpRight
                  className='
                    h-3.5
                    w-3.5

                    transition-transform
                    duration-500

                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  '
                  strokeWidth={1.5}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
