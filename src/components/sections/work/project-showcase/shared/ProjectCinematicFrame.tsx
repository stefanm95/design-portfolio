import { activeTheme, ui } from "@/theme";

type Props = {
  image: string;
  alt?: string;

  minHeight?: string;
};

export default function ProjectCinematicFrame({
  image,
  alt = "",
  minHeight = "min-h-[420px] xl:min-h-[560px]",
}: Props) {
  const overlays = activeTheme.effects.overlays;

  const reflections = activeTheme.effects.reflections;

  const atmosphericFill = activeTheme.effects.atmosphericFill;

  const shadows = activeTheme.effects.shadows;

  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        border
        ${ui.borders.hairline}

        ${shadows.cinematic}

        ${minHeight}
      `}
    >
      {/* ATMOSPHERIC BACKGROUND */}
      <div
        className={`
          absolute
          inset-0

          ${atmosphericFill.scale}
          ${atmosphericFill.blur}
          ${atmosphericFill.opacity}
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
        `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label={alt}
      />

      {/* BASE ATMOSPHERE */}
      <div
        className='absolute inset-0'
        style={{
          background: overlays.base,
        }}
      />

      {/* CINEMATIC DEPTH */}
      <div
        className='absolute inset-0'
        style={{
          background: overlays.cinematic,
        }}
      />

      {/* FILMIC VIGNETTE */}
      <div
        className='absolute inset-0'
        style={{
          background: overlays.vignette,
        }}
      />

      {/* LIGHT PASS */}
      <div
        className={`
          absolute
          inset-0

          ${reflections.opacity}
          ${reflections.blend}
        `}
        style={{
          background: reflections.hero,
        }}
      />
    </div>
  );
}
