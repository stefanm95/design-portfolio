import { useMemo } from "react";

import { cinematicNavigationItems } from "@/presentation/navigation/cinematic/cinematicNavigation.config";

export function useNavigationSections() {
  return useMemo(
    () =>
      cinematicNavigationItems.map((item) => ({
        id: item.id,

        label: item.label,

        element:
          typeof window !== "undefined"
            ? document.getElementById(item.id)
            : null,
      })),

    [],
  );
}
