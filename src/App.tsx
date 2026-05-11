import Hero from "@/presentation/sections/hero/Hero";
import Philosophy from "@/presentation/sections/philosophy/Philosophy";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Atmosphere from "@/components/shared/Atmosphere";
import GridOverlay from "@/components/shared/GridOverlay";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import SelectedWork from "@/presentation/sections/projects/SelectedWork";
import Experience from "@/presentation/sections/experience/Experience";
import About from "@/presentation/sections/about/About";
import Contact from "@/presentation/sections/contact/Contact";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ThemeSwitcher />
      <Atmosphere />
      <NoiseOverlay />
      <GridOverlay />

      <main className='relative z-10'>
        <Hero />
        {/* <Philosophy /> */}
        <Philosophy />
        <SelectedWork />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
