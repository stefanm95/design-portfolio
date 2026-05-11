import { useTheme } from "@/theme";

type Props = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

export default function ExperiencePanel({
  id,
  title,
  description,
  className,
}: Props) {
  const { theme } = useTheme();
  const panel = theme.experiencePanel;

  return (
    <div
      className={`
        group
        relative

        min-h-[150px]
        w-full

        sm:w-[300px]

        md:h-50
        md:w-[320px]
        md:left-60
        lg:left-0

        overflow-hidden
        cursor-pointer

        border

        ${panel.surface.base}
        ${panel.surface.border}
        ${panel.surface.blur}
        ${panel.surface.shadow}

        ${panel.motion.hover}
        ${panel.motion.stackFade}
        ${panel.motion.transition}

        hover:z-20

        ${className}
      `}
    >
      {/* ATMOSPHERIC LIGHT */}
      <div
        className='absolute inset-0 opacity-60'
        style={{
          background: panel.overlays.atmosphere,
        }}
      />

      {/* GLASS REFLECTION */}
      <div
        className='
          absolute
          inset-0

          opacity-30
          mix-blend-screen
        '
        style={{
          background: panel.overlays.reflection,
        }}
      />

      {/* INNER SHADE */}
      <div
        className='absolute inset-0'
        style={{
          background: panel.overlays.innerShade,
        }}
      />

      {/* HOVER BLOOM */}
      <div
        className='
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-700

          group-hover:opacity-100
        '
        style={{
          background: panel.overlays.hoverBloom,
        }}
      />

      {/* CONTENT */}
      <div
        className='
          relative
          z-10

          flex
          h-full
          flex-col
          justify-between

          p-5
          md:p-7
          lg:p-7
        '
      >
        {/* ID */}
        <span
          className={`
            text-[9px]
            tracking-[0.32em]

            ${panel.typography.id}
          `}
        >
          {id}
        </span>

        <div>
          {/* TITLE */}
          <h3
            className={`
              max-w-[190px]

              text-[16px]
              sm:text-[18px]
              lg:text-[20px]

              leading-[1]

              font-light
              tracking-[-0.04em]

              transition-all
              duration-700

              ${panel.typography.title}
              ${panel.typography.titleHover}
            `}
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className={`
              mt-4
              max-w-[210px]

              text-[12px]
              leading-[1.8]

              transition-all
              duration-1000
              ease-out

              opacity-100
              translate-y-0

              lg:opacity-0
              lg:translate-y-3

              lg:group-hover:translate-y-0
              lg:group-hover:opacity-100

              ${panel.typography.description}
            `}
          >
            {description}
          </p>
        </div>
      </div>

      {/* EDGE LIGHT */}
      <div
        className='
          absolute
          inset-y-0
          left-0
          w-px
        '
        style={{
          background: panel.dividers.edge,
        }}
      />
    </div>
  );
}
