// runtime/presentation/layout/resolvers/resolveSectionSpacing.ts

import { sectionSpacingScale } from "../realization";

type SectionKey = keyof typeof sectionSpacingScale;

type Props<TSection extends SectionKey> = {
  section: TSection;
};

export function resolveSectionSpacing<TSection extends SectionKey>({
  section,
}: Props<TSection>): (typeof sectionSpacingScale)[TSection] {
  return sectionSpacingScale[section];
}
