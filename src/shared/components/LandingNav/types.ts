import type { LandingSection } from '@/shared/types';

interface Props {
  currentSection: LandingSection;
  handleSectionClick: (currentSection: LandingSection) => void;
}

export type { Props };
