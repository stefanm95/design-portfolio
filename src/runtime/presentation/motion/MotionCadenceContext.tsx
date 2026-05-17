import { createContext } from "react";
import type { MotionCadence } from "./types";

export const MotionCadenceContext = createContext<MotionCadence | null>(null);
