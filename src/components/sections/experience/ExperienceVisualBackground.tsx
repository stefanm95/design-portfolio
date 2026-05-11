import { useTheme } from "@/theme";

export default function ExperienceVisualBackground() {
  const { theme } = useTheme();
  const scene = theme.scenes.experience;

  return (
    <div
      className='
        absolute
        inset-0
        overflow-hidden
      '
    >
      {/* TEXTURE */}
      <img
        src={scene.texture.image}
        alt=''
        className={`
          absolute
          inset-0

          h-full
          w-full

          object-cover

          ${scene.texture.scale}
          ${scene.texture.opacity}
          ${scene.texture.blur}
        `}
      />

      {/* PRIMARY ATMOSPHERE */}
      <div
        className={`
          absolute
          rounded-full
          blur-sm

          ${scene.atmosphere.primary.position}
          ${scene.atmosphere.primary.size}
          ${scene.atmosphere.primary.background}
        `}
      />

      {/* SECONDARY ATMOSPHERE */}
      <div
        className={`
          absolute
          rounded-full
          blur-sm

          ${scene.atmosphere.secondary.position}
          ${scene.atmosphere.secondary.size}
          ${scene.atmosphere.secondary.background}
        `}
      />

      {/* LIGHT COLUMN */}
      <div
        className={`
          absolute
          left-1/2
          top-0
          h-full

          -translate-x-1/2

          ${scene.lightColumn.width}
          ${scene.lightColumn.blur}
          ${scene.lightColumn.background}
        `}
      />

      {/* DEPTH FALLOFF */}
      <div
        className='absolute inset-0'
        style={{
          background: scene.falloff.vignette,
        }}
      />

      {/* EDGE DARKENING */}
      <div
        className='
          absolute
          inset-y-0
          right-0

          w-[20%]
        '
        style={{
          background: scene.falloff.edge,
        }}
      />
    </div>
  );
}
