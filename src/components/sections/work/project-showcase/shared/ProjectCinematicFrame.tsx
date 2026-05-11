import { activeTheme, ui } from "@/theme";

type Props = {
  image: string;

  alt?: string;

  minHeight?: string;

  imageFit?: "cover" | "contain";

  className?: string;

  imageClassName?: string;

  border?: boolean;

  variant?: "immersive" | "restrained";

  bloom?: boolean;

  vignette?: boolean;

  reflection?: boolean;

  atmosphericFill?: boolean;
};

export default function ProjectCinematicFrame({
  image,

  alt = "",

  minHeight = "min-h-[420px] xl:min-h-[560px]",

  imageFit = "contain",

  className = "",

  imageClassName = "",

  border = true,

  variant = "immersive",

  bloom = true,

  vignette = true,

  reflection = true,

  atmosphericFill = true,
}: Props) {
  const effects = activeTheme.effects;

  const immersive = variant === "immersive";

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
      {atmosphericFill && (
        <div
          className={`
            absolute
            inset-0

            ${immersive ? effects.atmosphericFill.scale : "scale-[1.03]"}
            ${immersive ? effects.atmosphericFill.blur : "blur-sm"}
            ${immersive ? effects.atmosphericFill.opacity : "opacity-6"}
          `}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

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
          opacity: immersive ? 1 : 0.35,
        }}
      />

      {/* CINEMATIC DEPTH */}
      <div
        className='absolute inset-0'
        style={{
          background: effects.overlays.cinematic,
          opacity: immersive ? 1 : 0.45,
        }}
      />

      {/* FILMIC VIGNETTE */}
      {vignette && (
        <div
          className='absolute inset-0'
          style={{
            background: effects.overlays.vignette,
            opacity: immersive ? 1 : 0.22,
          }}
        />
      )}

      {/* REFLECTION */}
      {reflection && (
        <div
          className={`
            absolute
            inset-0

            ${effects.reflections.blend}
          `}
          style={{
            background: effects.reflections.hero,
            opacity: immersive ? 0.2 : 0.06,
          }}
        />
      )}

      {/* BLOOM */}
      {bloom && (
        <div
          className={`
            absolute
            inset-0

            ${immersive ? "opacity-70 blur-sm" : "opacity-30 blur-[2px]"}
          `}
          style={{
            background: effects.blooms.primary,
          }}
        />
      )}
    </div>
  );
}
