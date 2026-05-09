export default function NoiseOverlay() {
  return (
    <div
      className='
    pointer-events-none
    fixed inset-0
    z-[1]
    opacity-[0.018]
  '
      style={{
        backgroundImage: "url('/textures/noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "320px 320px",
      }}
    />
  );
}
