export function resolveScene(blockType: string) {
  switch (blockType) {
    case "hero":
      return "introduction";

    case "systems":
      return "technical";

    case "mobile":
      return "immersive";

    default:
      return "default";
  }
}
