import { rgba, ui } from "@/theme";

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
  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        border
        ${ui.borders.hairline}

        bg-black/20

        ${minHeight}
      `}
    >
      {/* ATMOSPHERIC BACKGROUND */}
      <div
        className='
          absolute
          inset-0

          scale-110

          blur-sm
          opacity-30
        '
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* MAIN IMAGE */}
      <div
        className='
          absolute
          inset-0

          transition-transform
          duration-[2200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:scale-[0.995]
        '
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label={alt}
      />

      {/* ATMOSPHERIC OVERLAY */}
      <div
        className='
          absolute
          inset-0

          bg-linear-to-t
          from-black/50
          via-black/10
          to-black/20
        '
      />

      {/* LIGHT PASS */}
      <div
        className='
          absolute
          inset-0

          opacity-20
          mix-blend-screen
        '
        style={{
          background:
            `linear-gradient(115deg, transparent 20%, ${rgba.whiteReflection} 50%, transparent 80%)`,
        }}
      />
    </div>
  );
}
