// "use client";

// import clsx from "clsx";

// import type { ReactNode } from "react";

// import type { PanelRendering } from "@/runtime/presentation/system";

// type Props = {
//   children: ReactNode;

//   panel: PanelRendering;

//   className?: string;
// };

// export default function CinematicPanel({ children, panel, className }: Props) {
//   return (
//     <div
//       className={clsx(
//         //
//         // Runtime cinematic surface
//         //
//         panel.panel,

//         //
//         // Runtime glow behavior
//         //
//         panel.glow,

//         //
//         // Structural behavior
//         //
//         `
//           relative
//           overflow-hidden
//         `,

//         //
//         // Cinematic transitions
//         //
//         `
//           transition-all
//           duration-700
//         `,

//         className,
//       )}
//       data-elevation={panel.elevation}
//     >
//       {children}
//     </div>
//   );
// }
