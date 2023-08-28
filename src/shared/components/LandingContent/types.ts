import type { ReactElement } from 'react';

import type { LandingSection } from '@/shared/types/common';

interface Props {
  windowScroll: number;
  setIsAnimationActive: (isAnimationActive: boolean) => void;
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
