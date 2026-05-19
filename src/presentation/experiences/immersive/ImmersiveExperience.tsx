import Contact from "@/presentation/sections/contact/Contact";
import Experience from "@/presentation/sections/experience/Experience";
import Hero from "@/presentation/sections/hero/Hero";
import Philosophy from "@/presentation/sections/philosophy/Philosophy";

import { SectionMotionProvider } from "@/runtime/presentation";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers";

export default function ImmersiveExperience() {
  //
  // LAYOUT
  //

  const layout = resolvePageLayoutRuntime();

  return (
    <main>
      <SectionMotionProvider>
        <Hero />

        <Philosophy />

        {/* <SelectedWork /> */}

        <Experience />

        <Contact layout={layout.contact} />
      </SectionMotionProvider>
    </main>
  );
}
