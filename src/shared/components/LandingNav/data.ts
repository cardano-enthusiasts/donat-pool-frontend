import type { LandingSection } from '@/shared/types/common';

const getSections = (
  currentSection: string,
): Array<{
  title: string;
  isActive: boolean;
  id: LandingSection;
}> => [
  { title: 'Home', isActive: currentSection === 'home', id: 'home' },
  {
    title: 'How it works',
    isActive: currentSection === 'how-it-works',
    id: 'how-it-works',
  },
  {
    title: 'Why choose us',
    isActive: currentSection === 'why-choose-us',
    id: 'why-choose-us',
  },
  {
    title: 'Meet our team',
    isActive: currentSection === 'about-us',
    id: 'about-us',
  },
  {
    title: 'Roadmap',
    isActive: currentSection === 'roadmap' || currentSection === 'contact-us',
    id: 'roadmap',
  },
];

const wrapperVariants: { [key in LandingSection]: string } = {
  home: 'max-mobile:bg-blue',
  'how-it-works': 'max-mobile:bg-green',
  'why-choose-us': 'max-mobile:bg-red',
  'about-us': 'max-mobile:bg-yellow',
  roadmap: 'max-mobile:bg-black',
  'contact-us': 'max-mobile:bg-black',
};

const linkVariants: { [key in LandingSection]: string } = {
  home: 'text-green max-mobile:text-white',
  'how-it-works': 'text-red max-mobile:text-yellow',
  'why-choose-us': 'text-yellow max-mobile:text-blue',
  'about-us': 'text-green max-mobile:text-red',
  roadmap: 'text-blue max-mobile:text-green',
  'contact-us': 'text-blue max-mobile:text-green',
};

export { getSections, wrapperVariants, linkVariants };
