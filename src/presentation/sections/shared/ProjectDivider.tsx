import { dividersGradients } from "@/theme";

export default function ProjectDivider() {
  return (
    <div
      className={`
        h-px
        w-full

        ${dividersGradients.atmospheric}
      `}
    />
  );
}
