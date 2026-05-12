import Atmosphere from "@/design/atmosphere/Atmosphere";
import GridOverlay from "@/design/atmosphere/GridOverlay";
import NoiseOverlay from "@/design/atmosphere/NoiseOverlay";
import ThemeSwitcher from "@/design/controls/ThemeSwitcher";
import About from "@/presentation/sections/about/About";
import Contact from "@/presentation/sections/contact/Contact";
import Experience from "@/presentation/sections/experience/Experience";
import Hero from "@/presentation/sections/hero/Hero";
import Philosophy from "@/presentation/sections/philosophy/Philosophy";
import SelectedWork from "@/presentation/sections/projects/SelectedWork";
import { Navigation } from "./presentation";

export default function App() {
  return (
    <>
      <Atmosphere />
      <NoiseOverlay />
      <GridOverlay />
      <Navigation />
      <ThemeSwitcher />

      <main className="relative z-10">
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
