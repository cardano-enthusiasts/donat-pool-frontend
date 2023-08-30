import { ReactElement } from 'react';

import { LandingSection } from '@/shared/types/common';

interface Props {
  windowScroll: number;
  setAnimationIsActive: (animationIsActive: boolean) => void;
  currentSection: LandingSection;
  setCurrentSection: (landingSecton: LandingSection) => void;
}

type Content = {
  element: ReactElement;
  id: string;
  backgroundColor: 'blue' | 'green' | 'red' | 'black' | 'yellow';
  waves: {
    color: 'green' | 'red' | 'black';
  } | null;
}[];

export type { Props, Content };
