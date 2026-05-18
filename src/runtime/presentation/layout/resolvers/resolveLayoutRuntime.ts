// runtime/presentation/layout/resolvers/resolveLayoutRuntime.ts

import type { CompositionContract } from "../../composition/contract";

import type { ResolvedLayoutRuntime } from "../contracts";

import { resolvePageLayoutRuntime } from "./resolvePageLayoutRuntime";

import { resolveProjectLayoutRuntime } from "./resolveProjectLayoutRuntime";

type Props = {
  composition: CompositionContract;
};

export function resolveLayoutRuntime({
  composition,
}: Props): ResolvedLayoutRuntime {
  //
  // PAGE
  //

  const page = resolvePageLayoutRuntime();

  //
  // PROJECT
  //

  const project = resolveProjectLayoutRuntime({
    composition,
  });

  //
  // RETURN
  //

  return {
    page,

    project,
  };
}
