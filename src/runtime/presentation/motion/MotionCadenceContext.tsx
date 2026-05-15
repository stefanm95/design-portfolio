import { createContext } from "react";
import type { MotionCadence } from "./cadence";

export const MotionCadenceContext = createContext<MotionCadence | null>(null);
