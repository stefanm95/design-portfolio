import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

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
  const layout = resolvePageLayoutRuntime();

  const { theme } = useTheme();

  const panel = theme.experiencePanel;

  return (
    <div
      className={`
        ${layout.experience.panel.root}

        ${panel.surface.base}
        ${panel.surface.border}
        ${panel.surface.blur}
        ${panel.surface.shadow}

        ${panel.motion.hover}
        ${panel.motion.stackFade}
        ${panel.motion.transition}

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
      <div className={layout.experience.panel.content}>
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
          <h3
            className={`
              ${layout.experience.panel.title}

              ${panel.typography.title}
              ${panel.typography.titleHover}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              ${layout.experience.panel.description}

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
