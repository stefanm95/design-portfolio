import { useNavigation } from "@/runtime/navigation";

export function useActiveSection() {
  const { activeSection } = useNavigation();

  return activeSection;
}
