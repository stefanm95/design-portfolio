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
          pointer-events-none
          fixed
          rounded-full
          blur-[120px]

          ${atmosphere.primaryBloom.position}
          ${atmosphere.primaryBloom.size}
        `}
        style={{
          background: atmosphere.primaryBloom.gradient,
          opacity: atmosphere.primaryBloom.opacity,
        }}
      />

      <div
        className={`
          pointer-events-none
          fixed
          rounded-full
          blur-[120px]

          ${atmosphere.secondaryBloom.position}
          ${atmosphere.secondaryBloom.size}
        `}
        style={{
          background: atmosphere.secondaryBloom.gradient,
          opacity: atmosphere.secondaryBloom.opacity,
        }}
      />
    </>
  );
}
