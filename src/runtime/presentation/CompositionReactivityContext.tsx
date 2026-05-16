import { createContext } from "react";

import type { CompositionReactivityContextType } from "@/runtime/presentation";

export const CompositionReactivityContext =
  createContext<CompositionReactivityContextType | null>(null);
