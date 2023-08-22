import type { LandingSection } from '@/shared/types/common';

interface Props {
  currentSection: LandingSection;
  windowScroll: number;
  windowWidth: number;
  isOpen: boolean;
  isAnimationActive: boolean;
  handleIconClick: () => void;
  handleSectionClick: (currentSection: LandingSection) => void;
}

export type { Props };
