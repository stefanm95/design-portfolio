import { useNavigation } from "@/runtime/navigation";

export function useLenis() {
  const { scrollToSection } = useNavigation();

  return {
    scrollToSection,
  };
}
