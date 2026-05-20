// resolveContactStack.ts

import { contactStackScale } from "@/runtime/presentation/layout/realization/stack/contact.stack";

type SectionKey = keyof typeof contactStackScale;

type Props<TSection extends SectionKey> = {
  section: TSection;
};

export function resolveContactStack<TSection extends SectionKey>({
  section,
}: Props<TSection>): (typeof contactStackScale)[TSection] {
  return contactStackScale[section];
}
