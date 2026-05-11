import FadeIn from "@/presentation/animation/FadeIn";

import { useTheme } from "@/theme";

const links = [
  {
    label: "Email",
    value: "hello@yourstudio.dev",
    href: "mailto:hello@yourstudio.dev",
    status: "Primary channel",
  },

  {
    label: "GitHub",
    value: "github.com/yourprofile",
    href: "https://github.com/yourprofile",
    status: "Open source",
  },

  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com",
    status: "Professional network",
  },
];

export default function ContactLinks() {
  const { theme } = useTheme();

  const contact = theme.contactLinks;

  return (
    <div
      className={`
        relative
        overflow-hidden

        border

        ${contact.surface.base}
        ${contact.surface.border}
        ${contact.surface.blur}
      `}
    >
      {/* TEXTURE PANEL */}
      <div
        className='
          absolute
          inset-y-0
          right-0

          hidden
          lg:block

          w-[42%]

          opacity-[0.14]
        '
        style={{
          backgroundImage: `url(${contact.textures.panel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* TEXTURE FADE */}
      <div
        className='
          absolute
          inset-y-0
          right-0

          hidden
          lg:block

          w-[42%]
        '
        style={{
          background: contact.overlays.textureFade,
        }}
      />

      {/* ATMOSPHERIC GLOW */}
      <div
        className='
          absolute
          right-[10%]
          top-1/2

          h-[18rem]
          w-[18rem]

          -translate-y-1/2

          rounded-full
          blur-sm

          opacity-40
        '
        style={{
          background: contact.atmosphere.glow,
        }}
      />

      {/* REFLECTION */}
      <div
        className='
          absolute
          inset-0

          opacity-20
          mix-blend-screen
        '
        style={{
          background: contact.overlays.reflection,
        }}
      />

      {/* CONTENT */}
      <div
        className='
          relative
          z-10

          px-6
          py-8

          md:px-10
          md:py-10
        '
      >
        {/* SECTION LABEL */}
        <div
          className={`
            mb-12

            text-[11px]
            uppercase
            tracking-[0.28em]

            ${contact.typography.label}
          `}
        >
          Communication Channels
        </div>

        <div className='space-y-8'>
          {links.map((link, index) => (
            <FadeIn key={link.label} delay={0.08 * index}>
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className={`
                  group
                  block

                  border-b
                  border-white/[0.06]

                  pb-7

                  ${contact.motion.card}
                `}
              >
                {/* TOP ROW */}
                <div className='mb-4 flex items-center justify-between'>
                  <div
                    className={`
                      text-[10px]
                      uppercase
                      tracking-[0.28em]

                      ${contact.typography.label}
                    `}
                  >
                    {link.label}
                  </div>

                  <div className='flex items-center gap-2'>
                    <div
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full

                        ${contact.indicators.online}
                      `}
                    />

                    <span
                      className={`
                        text-[10px]

                        ${contact.typography.meta}
                      `}
                    >
                      {link.status}
                    </span>
                  </div>
                </div>

                {/* VALUE */}
                <div className='flex items-end justify-between gap-6'>
                  <span
                    className={`
                      text-lg
                      md:text-[22px]

                      tracking-[-0.03em]

                      transition-colors
                      duration-500

                      ${contact.typography.value}
                      ${contact.typography.hover}
                    `}
                  >
                    {link.value}
                  </span>

                  <span
                    className={`
                      text-xl

                      ${contact.typography.meta}

                      ${contact.motion.arrow}
                    `}
                  >
                    →
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
