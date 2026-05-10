import { atmosphereNoise } from "@/theme";

export default function NoiseOverlay() {
  return (
    <div
      className={`
        pointer-events-none
        fixed
        inset-0

        ${atmosphereNoise.zIndex}
        ${atmosphereNoise.opacity}
      `}
      style={{
        backgroundImage: `url('${atmosphereNoise.texture}')`,
        backgroundRepeat: "repeat",
        backgroundSize: atmosphereNoise.size,
      }}
    />
  );
}
