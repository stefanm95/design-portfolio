import { contactContent } from "@/content/contact";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import { rgba, ui } from "@/theme";

export default function ContactPanel() {
  const { panel } = contactContent;

  const layout = resolvePageLayoutRuntime();

  return (
    <div className={layout.contact.grid.panel}>
      {/* IMAGE */}
      <div
        className="
          absolute
          inset-0

          scale-[1.04]

          opacity-[0.22]
        "
        style={{
          backgroundImage:
            "url('/textures/glass/nik-shuliahin-xE3S9mjUjqA-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* DARK GRADIENT */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-black/10
          via-black/45
          to-black/80
        "
      />

      {/* ATMOSPHERIC LIGHT */}
      <div
        className="
          absolute
          left-[-10%]
          top-[20%]

          h-[18rem]
          w-[18rem]

          rounded-full
          blur-sm

          opacity-[0.12]
        "
        style={{
          background: `radial-gradient(circle, ${rgba.cyanBloomStrong}, transparent 70%)`,
        }}
      />

      {/* CONTENT */}
      <div className={layout.contact.panel.content}>
        {/* TOP */}
        <div className={layout.contact.panel.top}>
          <div
            className={`
              text-[11px]
              uppercase
              tracking-[0.34em]

              ${ui.text.context}
            `}
          >
            {panel.label}
          </div>

          <div
            className={`
              max-w-[14ch]

              text-3xl
              leading-[1.1]

              ${ui.text.interactive}
            `}
          >
            {panel.title}
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`
            max-w-[26ch]

            text-sm
            leading-[1.9]

            ${ui.text.tertiary}
          `}
        >
          {panel.description}
        </div>
      </div>
    </div>
  );
}
