import Contact from "@/presentation/sections/contact/Contact";
import Experience from "@/presentation/sections/experience/Experience";
import Hero from "@/presentation/sections/hero/Hero";
import Philosophy from "@/presentation/sections/philosophy/Philosophy";
import SelectedWork from "@/presentation/sections/projects/SelectedWork";
import { SectionMotionProvider } from "@/runtime/presentation";

export default function ImmersiveExperience() {
  return (
    <main>
      <SectionMotionProvider>
        <Hero />

        <Philosophy />

        <SelectedWork />

        <Experience />

        <Contact />
      </SectionMotionProvider>
    </main>
  );
}
