import { LandingSection } from '@/shared/types/common';

interface Props {
  currentSection: LandingSection;
  windowScroll: number;
  windowWidth: number;
  opened: boolean;
  animationIsActive: boolean;
  handleIconClick: () => void;
  handleSectionClick: (currentSection: LandingSection) => void;
}

export type { Props };
