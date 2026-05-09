import Hero from "@/components/hero/Hero";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Atmosphere from "@/components/shared/Atmosphere";
import GridOverlay from "@/components/shared/GridOverlay";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import Philosophy from "./components/sections/philosophy/Philosophy";
import SelectedWork from "./components/sections/work/SelectedWork";

export default function App() {
  return (
    <>
      <SmoothScroll />

      <Atmosphere />
      <NoiseOverlay />
      <GridOverlay />

      <main className='relative z-10'>
        <Hero />
        {/* <Philosophy /> */}
        <Philosophy />
        <SelectedWork />
      </main>
    </>
  );
}
