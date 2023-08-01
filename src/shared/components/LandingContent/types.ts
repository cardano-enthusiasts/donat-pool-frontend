import { type ReactElement } from 'react';

import { type LandingSection } from '@/shared/types';

export interface Props {
  windowScroll: number;
  setIsAnimationActive: (isAnimationActive: boolean) => void;
  currentSection: LandingSection;
  setCurrentSection: (landingSecton: LandingSection) => void;
}

export type Content = Array<{
  element: ReactElement;
  id: string;
  wavesClassName: string;
  wavesUseClassName?: string;
}>;
