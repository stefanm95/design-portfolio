import { motion } from "framer-motion";

import { atmosphereGrid, motionPresets } from "@/theme";

export default function GridOverlay() {
  return (
    <div className='pointer-events-none fixed inset-0 overflow-hidden'>
      <motion.div
        animate={{
          y: [0, 120],

          opacity: [
            atmosphereGrid.opacity.idle,
            atmosphereGrid.opacity.active,
            atmosphereGrid.opacity.idle,
          ],
        }}
        transition={motionPresets.gridDrift}
        className={`absolute ${atmosphereGrid.overlayBounds}`}
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              ${atmosphereGrid.lineColor} 1px,
              transparent 1px
            ),

            linear-gradient(
              to bottom,
              ${atmosphereGrid.lineColor} 1px,
              transparent 1px
            )
          `,

          backgroundSize: atmosphereGrid.size,
        }}
      />
    </div>
  );
}
