type GridEffectOptions = {
  background: string;

  size?: string;

  opacity?: {
    idle: number;
    active: number;
  };

  motion?: {
    duration: number;
    ease: "linear";
  };
};

export function createGridEffect({
  background,
  size = "120px 120px",
  opacity = {
    idle: 0.012,
    active: 0.02,
  },
  motion = {
    duration: 40,
    ease: "linear",
  },
}: GridEffectOptions) {
  return {
    background,
    size,
    opacity,
    motion,
  };
}
