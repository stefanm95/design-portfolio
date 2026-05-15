import {
  About,
  Contact,
  Experience,
  Hero,
  Philosophy,
  SelectedWork,
} from "@/presentation/sections";
import { SectionMotionProvider } from "@/runtime/presentation";

export default function CinematicExperience() {
  return (
    <main className="relative z-10">
      <SectionMotionProvider>
        <Hero />

        <Philosophy />

        <SelectedWork />

        <Experience />

        <About />

        <Contact />
      </SectionMotionProvider>
    </main>
  );
}
