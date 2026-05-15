import { useTheme } from "@/theme";

type AtmosphereVariant = "cinematic" | "editorial" | "minimal";

type Props = {
  variant?: AtmosphereVariant;
};

const atmosphereIntensity = {
  cinematic: {
    primaryOpacityMultiplier: 1,

    secondaryOpacityMultiplier: 1,

    blur: 120,
  },

  editorial: {
    primaryOpacityMultiplier: 0.55,

    secondaryOpacityMultiplier: 0.45,

    blur: 100,
  },

  minimal: {
    primaryOpacityMultiplier: 0.18,

    secondaryOpacityMultiplier: 0.12,

    blur: 72,
  },
} as const;

export default function Atmosphere({ variant = "cinematic" }: Props) {
  const { theme } = useTheme();

  const atmosphere = theme.atmosphere;

  const intensity = atmosphereIntensity[variant];

  return (
    <>
      {/* BASE ENVIRONMENT */}
      <div
        className="fixed inset-0"
        style={{
          background: atmosphere.base.background,
        }}
      />

      {/* STONE TEXTURE */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
        "
        style={{
          backgroundImage: `url(${atmosphere.stoneLayer.image})`,

          opacity: atmosphere.stoneLayer.opacity,

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      />

      {/* PRIMARY BLOOM */}
      <div
        className={`
          pointer-events-none
          fixed
          rounded-full

          ${atmosphere.primaryBloom.position}
          ${atmosphere.primaryBloom.size}
        `}
        style={{
          background: atmosphere.primaryBloom.gradient,

          opacity:
            atmosphere.primaryBloom.opacity *
            intensity.primaryOpacityMultiplier,

          filter: `blur(${intensity.blur}px)`,
        }}
      />

      {/* SECONDARY BLOOM */}
      <div
        className={`
          pointer-events-none
          fixed
          rounded-full

          ${atmosphere.secondaryBloom.position}
          ${atmosphere.secondaryBloom.size}
        `}
        style={{
          background: atmosphere.secondaryBloom.gradient,

          opacity:
            atmosphere.secondaryBloom.opacity *
            intensity.secondaryOpacityMultiplier,

          filter: `blur(${intensity.blur}px)`,
        }}
      />
    </>
  );
}
