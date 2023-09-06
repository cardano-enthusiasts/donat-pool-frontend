import type { LandingSection } from '@/shared/types';

interface Props {
  currentSection: LandingSection;
  animationIsActive: boolean;
  handleSectionClick: (currentSection: LandingSection) => void;
}

export type { Props };
