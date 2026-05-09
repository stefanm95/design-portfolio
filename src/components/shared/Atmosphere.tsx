export default function Atmosphere() {
  return (
    <>
      {/* BASE */}
      <div className='fixed inset-0 bg-[#050505]' />

      {/* STONE FOUNDATION */}
      <div
        className='
          pointer-events-none
          fixed inset-0

          opacity-[0.18]
          mix-blend-soft-light
        '
        style={{
          backgroundImage:
            "url('/textures/stone/black-painted-wall-texture-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* GLOBAL CYAN ATMOSPHERE */}
      <div
        className='
          pointer-events-none
          fixed

          left-[-12vw]
          top-[-18vh]

          h-[90vw]
          w-[90vw]

          rounded-full
          blur-3xl

          opacity-[0.45]
        '
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,255,0.10) 0%, transparent 72%)",
        }}
      />

      {/* GOLD ATMOSPHERE */}
      <div
        className='
          pointer-events-none
          fixed

          bottom-[-30vh]
          right-[-12vw]

          h-[70vw]
          w-[70vw]

          rounded-full
          blur-3xl

          opacity-[0.28]
        '
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,122,0.08) 0%, transparent 72%)",
        }}
      />

      {/* GLASS REFRACTION TEXTURE */}
      <div
        className='
          pointer-events-none
          fixed inset-0

          opacity-[0.035]
          mix-blend-screen
        '
        style={{
          backgroundImage:
            "url('/textures/glass/zhiqiang-wang-tMgP-wH4ux0-unsplash.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* RIGHT SIDE REFRACTION VOLUME */}
      <div
        className='
          pointer-events-none
          fixed

          inset-y-0
          right-0

          w-[34vw]

          opacity-[0.12]
          mix-blend-screen
        '
        style={{
          backgroundImage:
            "url('/textures/glass/fabio-troyli-stzrfbcWPP8-unsplash.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CENTER FOCUS VIGNETTE */}
      <div
        className='pointer-events-none fixed inset-0'
        style={{
          background:
            "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.68) 100%)",
        }}
      />

      {/* TOP CINEMATIC FADE */}
      <div
        className='
          pointer-events-none
          fixed
          inset-x-0
          top-0
          h-[28vh]
        '
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72), transparent)",
        }}
      />
    </>
  );
}
