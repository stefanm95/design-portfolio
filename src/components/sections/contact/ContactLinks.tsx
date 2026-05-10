import FadeIn from "@/components/motion/FadeIn";
import { opacityClass, ui } from "@/theme";

const links = [
  {
    label: "Email",
    value: "hello@yourstudio.dev",
    href: "mailto:hello@yourstudio.dev",
  },

  {
    label: "GitHub",
    value: "github.com/yourprofile",
    href: "https://github.com/yourprofile",
  },

  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com",
  },
];

export default function ContactLinks() {
  return (
    <div
      className={`
        relative
        overflow-hidden

        border
        ${ui.borders.faint}

        ${ui.surfaces.veil}
        backdrop-blur-[2px]
      `}
    >
      {/* RIGHT SIDE TEXTURE PANEL */}
      <div
        className={`
          absolute
          inset-y-0
          right-0

          hidden
          lg:block

          w-[42%]

          opacity-[0.14]
        '
        style={{
          backgroundImage:
            "url('/textures/glass/fiona-wZuSilr-mTw-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* DARK FADE OVER TEXTURE */}
      <div
        className='
          absolute
          inset-y-0
          right-0

          hidden
          lg:block

          w-[42%]

          bg-gradient-to-l
          from-black/10
          via-black/40
          to-transparent
        '
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

          ${opacityClass.subtle}
        `}
        style={{
          background:
            "radial-gradient(circle, rgba(90,180,255,0.28), transparent 72%)",
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
        <div
          className={`
            mb-10

            text-[11px]
            uppercase
            tracking-[0.28em]

            ${ui.text.annotation}
          `}
        >
          CONNECT WITH ME
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
                  ${ui.borders.faint}

                  pb-6
                `}
              >
                <div
                  className={`
                    mb-2

                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    ${ui.text.annotation}
                  `}
                >
                  {link.label}
                </div>

                <div
                  className='
                    flex
                    items-center
                    justify-around

                    gap-6
                  '
                >
                  <span
                    className={`
                      text-lg
                      ${ui.text.interactive}

                      transition-all
                      duration-500

                      group-hover:text-white
                    `}
                  >
                    {link.value}
                  </span>

                  <span
                    className={`
                      ${ui.text.ghost}
                      relative
                      -left-100
                      transition-all
                      duration-500

                      group-hover:translate-x-1
                      ${ui.text.hoverSoft}
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
