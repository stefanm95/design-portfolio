import { useMemo } from "react";

import { navigationSections } from "./navigation.config";

export function useNavigationSections() {
  return useMemo(
    () =>
      navigationSections.map((section) => ({
        ...section,

        element:
          typeof window !== "undefined"
            ? document.getElementById(section.id)
            : null,
      })),

    [],
  );
}
