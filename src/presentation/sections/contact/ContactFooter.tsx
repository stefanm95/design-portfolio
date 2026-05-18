// ContactFooter.tsx

import { contactContent } from "@/content/contact";

import Text from "@/design/typography/Text";

import FadeIn from "@/presentation/animation/FadeIn";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import { opacityClass, ui } from "@/theme";

export default function ContactFooter() {
  const { footer } = contactContent;

  const layout = resolvePageLayoutRuntime();

  return (
    <footer
      className={`
        relative
        overflow-hidden

        px-6
        md:px-8

        border-t
        ${ui.borders.faint}

        ${layout.contact.footer.root}
      `}
    >
      {/* ATMOSPHERIC GRADIENT */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.06]
        '
        style={{
          background:
            "linear-gradient(90deg, rgba(90,180,255,0.12) 0%, transparent 38%, rgba(255,120,80,0.08) 100%)",
        }}
      />

      {/* NOISE / TEXTURE */}
      <div
        className={`
          absolute
          inset-0

          ${opacityClass.faint}
        `}
        style={{
          backgroundImage: "url('/textures/noise.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <FadeIn>
        <div
          className={`
            relative
            z-10

            ${layout.contact.footer.content}
          `}
        >
          {/* LEFT */}
          <div className={layout.contact.footer.left}>
            <div
              className={`
                text-[11px]
                uppercase
                tracking-[0.34em]

                ${ui.text.annotation}
              `}
            >
              {footer.label}
            </div>

            <div
              className={`
                max-w3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                leading-[0.95]

                ${ui.text.accent}
              `}
            >
              {footer.title}
            </div>

            <p
              className={`
                max-w-[34ch]

                text-sm
                leading-[1.9]

                ${ui.text.muted}
              `}
            >
              {footer.description}
            </p>
          </div>

          {/* RIGHT */}
          <div className={layout.contact.footer.right}>
            <a
              href='mailto:hello@yourstudio.dev'
              className={`
                group
                inline-flex
                items-center
                gap-4

                border
                ${ui.borders.focus}

                px-6
                py-4

                text-[11px]
                uppercase
                tracking-[0.28em]

                ${ui.text.secondary}

                transition-all
                duration-500

                ${ui.borders.hover}
                ${ui.surfaces.hover}

                hover:text-white
              `}
            >
              {footer.cta.label}

              <span
                className='
                  transition-transform
                  duration-500

                  group-hover:translate-x-1
                '
              >
                →
              </span>
            </a>

            <div
              className={`
                ${layout.contact.footer.meta}

                text-[11px]
                uppercase
                tracking-[0.24em]

                ${ui.text.quiet}
              `}
            >
              <Text>{footer.meta.author}</Text>

              <Text className='text-lg'>{footer.meta.copyright}</Text>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
