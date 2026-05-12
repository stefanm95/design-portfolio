import Contact from "@/presentation/sections/contact/Contact";
import Experience from "@/presentation/sections/experience/Experience";
import Hero from "@/presentation/sections/hero/Hero";
import Philosophy from "@/presentation/sections/philosophy/Philosophy";
import SelectedWork from "@/presentation/sections/projects/SelectedWork";

export default function CinematicExperience() {
  return (
    <main>
      <Hero />

      <Philosophy />

      <SelectedWork />

      <Experience />

      <Contact />
    </main>
  );
}
