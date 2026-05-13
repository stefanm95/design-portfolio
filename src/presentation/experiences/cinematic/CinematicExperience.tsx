import {
  About,
  Contact,
  Experience,
  Hero,
  Philosophy,
  SelectedWork,
} from "@/presentation/sections";

export default function CinematicExperience() {
  return (
    <main className="relative z-10">
      <Hero />

      <Philosophy />

      <SelectedWork />

      <Experience />

      <About />

      <Contact />
    </main>
  );
}
