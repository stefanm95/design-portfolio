import Hero from "@/components/hero/Hero";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Atmosphere from "@/components/shared/Atmosphere";
import GridOverlay from "@/components/shared/GridOverlay";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import Philosophy from "./components/sections/philosophy/Philosophy";
import SelectedWork from "./components/sections/work/SelectedWork";
import Experience from "@/components/sections/experience/Experience";
import About from "./components/sections/about/About";
import Contact from "./components/sections/contact/Contact";
import ThemeSwitcher from "./components/shared/ThemeSwitcher";

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
