import type { ReactElement, RefObject } from 'react';

import type { LandingSection } from '@/shared/types';

interface Props {
  setAnimationIsActive: (animationIsActive: boolean) => void;
  currentSection: LandingSection;
  setCurrentSection: (landingSecton: LandingSection) => void;
}

type Section = 'home' | 'how-it-works' | 'why-choose-us' | 'about-us';

type Refs = Record<Section, RefObject<HTMLDivElement>>;

type Content = {
  element: ReactElement;
  id: string;
  backgroundColor: 'blue' | 'green' | 'red' | 'black' | 'yellow';
  waves: {
    color: 'green' | 'red' | 'black';
  } | null;
}[];

export type { Props, Content, Refs, Section };
