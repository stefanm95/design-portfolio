import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";

type Props = {
  as?: ElementType;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants = {
  primary: `
    bg-linear-to-br
    from-[#f3f6f8]
    via-[#adc0cf]
    to-[#f0d1a0]
  `,

  secondary: `
    bg-linear-to-br
    from-[#dce8f2]
    via-[#9fb8c8]
    to-[#f1cb93]
  `,

  tertiary: `
    bg-linear-to-br
    from-[#eef2f5]
    via-[#a8bac7]
    to-[#e8c48c]
  `,
};

export default function Display({
  as: Component = "h1",
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <Component
      className={cn(
        `
        font-display
        font-medium

        text-6xl
        md:text-8xl
        xl:text-[10rem]

        leading-[0.88]
        tracking-[-0.075em]

        text-balance

        bg-clip-text
        text-transparent

        drop-shadow-[0_0_30px_rgba(180,220,255,0.05)]
        `,

        variants[variant],

        className,
      )}
    >
      {children}
    </Component>
  );
}
