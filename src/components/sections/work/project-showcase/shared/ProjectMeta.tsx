import { ArrowUpRight } from "lucide-react";

import Display from "@/components/typography/Display";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../types";

type Props = ProjectBlockProps & {
  index: number;
};

export default function ProjectMeta({ project, index }: Props) {
  return (
    <div className='grid grid-cols-12 gap-y-14 xl:gap-x-10'>
      {/* INDEX */}
      <div className='col-span-12 xl:col-span-2'>
        <div
          className='
            text-[11px]
            tracking-[0.3em]
            text-white/24
          '
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>
      </div>

      {/* TITLE */}
      <div className='col-span-12 xl:col-span-6'>
        <div className='space-y-6'>
          <Display
            as='h2'
            variant='secondary'
            className='
              max-w-[32ch]

              text-[3.8rem]
              leading-[0.9]

              md:text-[6rem]
              xl:text-[7.5rem]
            '
          >
            {project.title}
          </Display>

          <Text
            className='
              text-[13px]
              uppercase
              tracking-[0.28em]
              text-white/26
            '
          >
            {project.subtitle}
          </Text>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className='col-span-12 xl:col-span-4'>
        <div className='space-y-10'>
          <Text
            className='
              max-w-[34ch]

              text-[15px]
              leading-[1.95]

              text-white/44
            '
          >
            {project.description}
          </Text>

          <div className='flex flex-wrap gap-x-10 gap-y-6'>
            <div className='space-y-2'>
              <div className='text-[10px] uppercase tracking-[0.24em] text-white/22'>
                Stack
              </div>

              <Text className='text-white/58'>{project.stack.join(" / ")}</Text>
            </div>

            <div className='space-y-2'>
              <div className='text-[10px] uppercase tracking-[0.24em] text-white/22'>
                Year
              </div>

              <Text className='text-white/58'>{project.year}</Text>
            </div>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='
      group/link

      inline-flex
      items-center
      gap-3

      pt-4

      text-[11px]
      uppercase
      tracking-[0.28em]

      text-white/42

      transition-colors
      duration-500

      hover:text-white/88
    '
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
  );
}
