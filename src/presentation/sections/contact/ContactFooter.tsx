import { contactContent } from "@/content/contact";
import Text from "@/design/typography/Text";
import FadeIn from "@/presentation/animation/FadeIn";
import { opacityClass, ui } from "@/theme";

export default function ContactFooter() {
  return (
    <footer
      className={`
        relative
        overflow-hidden
        px-6
        md:px-8
        border-t
        ${ui.borders.faint}

        py-10
        md:py-12
        lg:py-14
      `}
    >
      {/* ATMOSPHERIC GRADIENT */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.06]
        "
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
          className="
            relative
            z-10

            flex
            flex-col
            gap-10
            md:gap-12
            lg:gap-14

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div className="space-y-8">
            <div
              className={`
                text-[11px]
                uppercase
                tracking-[0.34em]

                ${ui.text.annotation}
              `}
            >
              {contactContent.footer.label}
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
              {contactContent.footer.title}
            </div>

            <p
              className={`
                max-w-[34ch]

                text-sm
                leading-[1.9]

                ${ui.text.muted}
              `}
            >
              {contactContent.footer.description}
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              gap-8
              items-end
              xl:items-end
            "
          >
            {/* CTA */}
            <a
              href="mailto:hello@yourstudio.dev"
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
              {contactContent.footer.cta.label}
              <span
                className="
                  transition-transform
                  duration-500

                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* META */}
            <div
              className={`
                flex
                flex-col
                gap-3

                text-[11px]
                uppercase
                tracking-[0.24em]

                ${ui.text.quiet}

                md:flex-row
                md:items-center
                md:gap-8
              `}
            >
              <Text> {contactContent.footer.meta.author}</Text>

              <Text className="text-lg">
                {contactContent.footer.meta.copyright}
              </Text>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
