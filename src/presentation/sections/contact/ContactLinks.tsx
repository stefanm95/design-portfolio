import FadeIn from "@/presentation/animation/FadeIn";

import { contactContent } from "@/content/contact";

import type { ResolvedContactLayout } from "@/runtime/presentation/layout/contracts";

import { ui } from "@/theme";

type Props = {
  layout: ResolvedContactLayout["links"];
};

export default function ContactLinks({ layout }: Props) {
  const { links } = contactContent;

  return (
    <div
      className={`
        relative

        border-t
        ${ui.borders.faint}
      `}
    >
      <div className={layout.list}>
        {links.items.map((link, index) => (
          <FadeIn key={link.label} delay={index * 0.06}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`
                group
                block

                border-b
                ${ui.borders.hairline}
              `}
            >
              <div
                className={`
                  ${layout.row}

                  px-6
                  py-8

                  md:px-8
                `}
              >
                {/* LEFT */}
                <div>
                  <div className={layout.top}>
                    <span
                      className={`
                        text-[10px]
                        uppercase
                        tracking-[0.28em]

                        ${ui.text.annotation}
                      `}
                    >
                      {link.label}
                    </span>

                    <div className={layout.status}>
                      <div
                        className="
                          h-2
                          w-2
                          rounded-full

                          bg-cyan-300
                        "
                      />

                      <span
                        className={`
                          text-[10px]
                          uppercase
                          tracking-[0.24em]

                          ${ui.text.quiet}
                        `}
                      >
                        {link.status}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`
                      text-xl
                      md:text-2xl

                      transition-all
                      duration-500

                      ${ui.text.primary}

                      group-hover:translate-x-1
                    `}
                  >
                    {link.value}
                  </div>
                </div>

                {/* RIGHT */}
                <div
                  className={`
                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    transition-transform
                    duration-500

                    ${ui.text.metadata}

                    group-hover:translate-x-1
                  `}
                >
                  →
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
