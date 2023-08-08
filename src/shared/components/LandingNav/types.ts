import { type LandingSection } from '@/shared/types/common';

export interface Props {
  currentSection: LandingSection;
  windowScroll: number;
  windowWidth: number;
  handleIconClick: () => void;
  handleSectionClick: (currentSection: LandingSection) => void;
  isOpen: boolean;
  isAnimationActive: boolean;
}
