import { type CurrentLandingSection } from 'shared/types';

export interface Props {
  currentSection: CurrentLandingSection;
  windowScroll: number;
  windowWidth: number;
  handleIconClick: () => void;
  isOpen: boolean;
}
