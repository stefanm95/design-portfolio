import { noise } from "@/theme";

export default function NoiseOverlay() {
  return (
    <div
      className={`
        pointer-events-none
        fixed inset-0
        ${noise.zIndex}
      `}
      style={{
        opacity: noise.opacity,

        backgroundImage: `url('${noise.texture}')`,

        backgroundRepeat: "repeat",

        backgroundSize: noise.size,
      }}
    />
  );
}
