import { gradients } from "@/theme";

export default function ProjectDivider() {
  return (
    <div
      className={`
        h-px
        w-full

        ${gradients.dividers.atmospheric}
      `}
    />
  );
}
