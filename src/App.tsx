import Hero from "@/presentation/sections/hero/Hero";
import Philosophy from "@/presentation/sections/philosophy/Philosophy";
import Atmosphere from "@/presentation/ui/atmosphere/Atmosphere";
import GridOverlay from "@/presentation/ui/atmosphere/GridOverlay";
import NoiseOverlay from "@/presentation/ui/atmosphere/NoiseOverlay";
import SelectedWork from "@/presentation/sections/projects/SelectedWork";
import Experience from "@/presentation/sections/experience/Experience";
import About from "@/presentation/sections/about/About";
import Contact from "@/presentation/sections/contact/Contact";
import ThemeSwitcher from "@/presentation/ui/controls/ThemeSwitcher";
import { Navigation } from "./presentation";

export default function App() {
  return (
    <>
      <Atmosphere />
      <NoiseOverlay />
      <GridOverlay />
      <Navigation />
      <ThemeSwitcher />

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
