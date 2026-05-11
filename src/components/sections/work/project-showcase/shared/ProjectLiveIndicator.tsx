import { activeTheme, ui } from "@/theme";

export default function ProjectLiveIndicator() {
  const effects = activeTheme.effects;

  return (
    <div
      className={`
        absolute
        bottom-8
        right-8

        flex
        items-center
        gap-3

        text-[10px]
        uppercase
        tracking-[0.28em]

        ${ui.text.paragraph}
      `}
    >
      <span className='relative flex h-2 w-2'>
        <span
          className={`
            absolute
            inline-flex
            h-full
            w-full
            animate-ping
            rounded-full

            ${effects.indicators.livePing}
          `}
        />

        <span
          className={`
            relative
            inline-flex
            h-2
            w-2
            rounded-full

            ${effects.indicators.liveDot}
          `}
        />
      </span>

      <span
        className={`
          transition-colors
          duration-500

          ${ui.text.hoverInteractive}
        `}
      >
        Live Experience
      </span>
    </div>
  );
}
