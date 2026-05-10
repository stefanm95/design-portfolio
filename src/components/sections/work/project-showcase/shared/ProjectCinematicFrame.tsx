import { activeTheme, ui } from "@/theme";

type Props = {
  image: string;

  alt?: string;

  minHeight?: string;

  imageFit?: "cover" | "contain";

  className?: string;

  imageClassName?: string;

  priorityBloom?: boolean;

  border?: boolean;
};

export default function ProjectCinematicFrame({
  image,

  alt = "",

  minHeight = "min-h-[420px] xl:min-h-[560px]",

  imageFit = "contain",

  className = "",

  imageClassName = "",

  priorityBloom = true,

  border = true,
}: Props) {
  const effects = activeTheme.effects;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        ${border ? `border ${ui.borders.hairline}` : ""}

        ${effects.shadows.cinematic}

        ${minHeight}
        ${className}
      `}
    >
      {/* ATMOSPHERIC BACKGROUND */}
      <div
        className={`
          absolute
          inset-0

          ${effects.atmosphericFill.scale}
          ${effects.atmosphericFill.blur}
          ${effects.atmosphericFill.opacity}
        `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* MAIN IMAGE */}
      <div
        className={`
          absolute
          inset-0

          ${activeTheme.showcase.image.transition}
          ${activeTheme.showcase.image.hoverScale}

          ${imageClassName}
        `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: imageFit,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label={alt}
      />

      {/* BASE ATMOSPHERE */}
      <div
        className='absolute inset-0'
        style={{
          background: effects.overlays.base,
        }}
      />

      {/* CINEMATIC DEPTH */}
      <div
        className='absolute inset-0'
        style={{
          background: effects.overlays.cinematic,
        }}
      />

      {/* FILMIC VIGNETTE */}
      <div
        className='absolute inset-0'
        style={{
          background: effects.overlays.vignette,
        }}
      />

      {/* REFLECTION */}
      <div
        className={`
          absolute
          inset-0

          ${effects.reflections.opacity}
          ${effects.reflections.blend}
        `}
        style={{
          background: effects.reflections.hero,
        }}
      />

      {/* BLOOM */}
      {priorityBloom && (
        <div
          className='
            absolute
            inset-0

            opacity-70
            blur-sm
          '
          style={{
            background: effects.blooms.primary,
          }}
        />
      )}
    </div>
  );
}
