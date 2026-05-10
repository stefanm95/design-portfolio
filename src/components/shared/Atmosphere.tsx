import {
  atmosphericLayout,
  backgrounds,
  blur,
  gradients,
  opacity,
  textures,
} from "@/theme";

export default function Atmosphere() {
  return (
    <>
      {/* BASE */}
      <div
        className='fixed inset-0'
        style={{
          background: backgrounds.base,
        }}
      />

      {/* STONE FOUNDATION */}
      <div
        className={`
          pointer-events-none
          fixed inset-0

          ${opacity.atmosphere.stone}
        `}
        style={{
          backgroundImage: `url('${textures.stone.blackWall}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* GLOBAL CYAN ATMOSPHERE */}
      <div
        className={`
          pointer-events-none
          fixed

          ${atmosphericLayout.globalCyan.position}
          ${atmosphericLayout.globalCyan.size}

          rounded-full

          ${blur.cinematic}
          ${opacity.atmosphere.cyanGlow}
          ${gradients.atmospheric.cyan}
        `}
      />

      {/* GOLD ATMOSPHERE */}
      <div
        className={`
          pointer-events-none
          fixed

          ${atmosphericLayout.globalGold.position}
          ${atmosphericLayout.globalGold.size}

          rounded-full

          ${blur.cinematic}
          ${opacity.atmosphere.goldGlow}
          ${gradients.atmospheric.gold}
        `}
      />

      {/* GLASS REFRACTION TEXTURE */}
      <div
        className={`
          pointer-events-none
          fixed inset-0

          ${opacity.atmosphere.glass}
        `}
        style={{
          backgroundImage: `url('${textures.glass.secondary}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* RIGHT SIDE REFRACTION VOLUME */}
      <div
        className={`
          pointer-events-none
          fixed

          inset-y-0
          right-0

          ${atmosphericLayout.sideRefraction.width}
          ${opacity.atmosphere.sideRefraction}
        `}
        style={{
          backgroundImage: `url('${textures.glass.primary}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CENTER FOCUS VIGNETTE */}
      <div
        className='pointer-events-none fixed inset-0'
        style={{
          background: gradients.lighting.vignette,
        }}
      />

      {/* TOP CINEMATIC FADE */}
      <div
        className={`
          pointer-events-none
          fixed
          inset-x-0
          top-0

          ${atmosphericLayout.topFade.height}
        `}
        style={{
          background: gradients.overlays.topFade,
        }}
      />
    </>
  );
}
