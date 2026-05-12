import { themes, type ThemeName } from "@/theme/presets";

import { useTheme } from "@/theme/runtime/useTheme";

const labels: Record<ThemeName, string> = {
  monochrome: "Noir",
  obsidianGold: "Obsidian",
  darkCyan: "Prism",
};

export default function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme();

  return (
    <div
      className='
        fixed
        right-6
        top-6
        z-[999]

        flex
        items-center
        gap-1

        border
        border-white/[0.06]

        bg-transparent

        p-1.5

        backdrop-blur-sm

        shadow-[0_10px_60px_rgba(0,0,0,0.35)]
      '
    >
      {(Object.keys(themes) as ThemeName[]).map((theme) => {
        const isActive = theme === themeName;

        return (
          <button
            key={theme}
            onClick={() => setTheme(theme)}
            className={`
              group
              relative

              overflow-hidden
              px-4
              py-1
              cursor-pointer
              transition-all
              duration-700
              ease-out

              ${
                isActive
                  ? `
                    bg-white/[0.10]
                    text-white
                  `
                  : `
                    text-white/32
                    hover:text-white/72
                  `
              }
            `}
          >
            {/* ACTIVE GLOW */}
            {isActive && (
              <div
                className='
                  absolute
                  inset-0

                  opacity-70
                  blur-sm
                '
                style={{
                  background:
                    theme === "obsidianGold"
                      ? "radial-gradient(circle, rgba(212,175,55,0.22), transparent 72%)"
                      : theme === "darkCyan"
                        ? "radial-gradient(circle, rgba(0,180,255,0.18), transparent 72%)"
                        : "radial-gradient(circle, rgba(255,255,255,0.12), transparent 72%)",
                }}
              />
            )}

            <span
              className='
                relative
                z-10

                text-[10px]
                uppercase
                tracking-[0.32em]
              '
            >
              {labels[theme]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
