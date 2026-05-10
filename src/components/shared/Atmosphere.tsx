import { atmosphere } from "@/theme";

export default function Atmosphere() {
  return (
    <>
      <div
        className='fixed inset-0'
        style={{
          background: atmosphere.base.background,
        }}
      />

      <div
        className='pointer-events-none fixed inset-0'
        style={{
          backgroundImage: `url(${atmosphere.stoneLayer.image})`,
          opacity: atmosphere.stoneLayer.opacity,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className={`
        className={`
          pointer-events-none
          fixed
          rounded-full
          blur-[120px]

          ${atmosphere.cyanBloom.position}
          ${atmosphere.cyanBloom.size}
        `}
        style={{
          background: atmosphere.cyanBloom.gradient,
          opacity: atmosphere.cyanBloom.opacity,
        }}
      />
    </>
  );
}
