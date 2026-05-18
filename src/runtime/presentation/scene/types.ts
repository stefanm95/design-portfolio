import type { EnvironmentalRuntime } from "@/runtime/presentation/scene/environment/types";
import type { SceneOrchestration } from "@/runtime/presentation/scene/orchestration/types";
import type { SceneSemantics } from "@/runtime/presentation/scene/semantics/types";
import type { SceneId } from "./definitions";

export type SceneDefinition = {
  id: SceneId;

  semantics: SceneSemantics;

  orchestration: SceneOrchestration;
};

//
// RUNTIME SCENE
//

export type SceneRuntime = {
  definition: SceneDefinition;

  environment: EnvironmentalRuntime;
};
