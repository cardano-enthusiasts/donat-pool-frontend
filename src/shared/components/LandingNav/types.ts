import { LandingSection } from '@/shared/types';

interface Props {
  currentSection: LandingSection;
  windowScroll: number;
  windowWidth: number;
  shown: boolean;
  animationIsActive: boolean;
  handleIconClick: () => void;
  handleSectionClick: (currentSection: LandingSection) => void;
}

export type { Props };
