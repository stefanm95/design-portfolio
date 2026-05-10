import FadeIn from "@/components/motion/FadeIn";
import { gradients } from "@/theme";

type Props = { images: string[] };
export default function ArchitecturalMobileStack({ images }: Props) {
  return (
    <div className=' relative flex flex-col gap-5 sm:gap-6 '>
      {/* MAIN VISUAL */}
      <FadeIn>
        <div className=' relative overflow-hidden aspect-[16/10] bg-black/20 '>
          {/* ATMOSPHERIC GLOW */}
          <div className=' absolute inset-0 z-[1] opacity-40 blur-sm bg-[radial-gradient(circle_at_50%_30%,rgba(103,80,255,0.12),transparent_70%)] ' />
          <img
            src={images[1]}
            alt=''
            className=' relative z-[2] h-full w-full object-cover object-top scale-[1.02] shadow-[0_30px_90px_rgba(0,0,0,0.45)] '
          />
          {/* CINEMATIC OVERLAY */}
          <div className={` absolute inset-0 z-[3] ${gradients.overlays.cinematic} `} />
        </div>
      </FadeIn>
      {/* SECONDARY ROW */}
      <div className='grid grid-cols-2 gap-4'>
        <FadeIn delay={0.08}>
          <div className=' relative overflow-hidden aspect-[4/3] '>
            <img
              src={images[0]}
              alt=''
              className=' h-full w-full object-cover object-top opacity-80 shadow-[0_18px_50px_rgba(0,0,0,0.28)] '
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.16}>
          <div className=' relative overflow-hidden aspect-[4/3] '>
            <img
              src={images[2]}
              alt=''
              className=' h-full w-full object-cover object-top opacity-80 shadow-[0_18px_50px_rgba(0,0,0,0.28)] '
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
