import { type ReactElement } from 'react';

import { type LandingSection } from 'shared/types';

export interface Props {
  windowScroll: number;
  setIsAnimationActive: (isAnimationActive: boolean) => void;
  currentSection: LandingSection;
  setCurrentSection: (landingSecton: LandingSection) => void;
}

export type Content = Array<{
  element: ReactElement;
  id: string;
  backgroundColor: 'blue' | 'green' | 'red' | 'black' | 'yellow';
  waves: {
    color: 'green' | 'red' | 'black';
  } | null;
}>;
