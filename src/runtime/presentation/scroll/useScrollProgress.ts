import { useNavigation } from "@/runtime/navigation";

export function useScrollProgress() {
  const { scrollProgress } = useNavigation();

  return scrollProgress;
}
