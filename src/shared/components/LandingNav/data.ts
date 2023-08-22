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
  home: 'max-[1100px]:bg-blue',
  'how-it-works': 'max-[1100px]:bg-green',
  'why-choose-us': 'max-[1100px]:bg-red',
  'about-us': 'max-[1100px]:bg-yellow',
  roadmap: 'max-[1100px]:bg-black',
  'contact-us': 'max-[1100px]:bg-black',
};

const linkVariants: { [key in LandingSection]: string } = {
  home: 'text-green max-[1100px]:text-white',
  'how-it-works': 'text-red max-[1100px]:text-yellow',
  'why-choose-us': 'text-yellow max-[1100px]:text-blue',
  'about-us': 'text-green max-[1100px]:text-red',
  roadmap: 'text-blue max-[1100px]:text-green',
  'contact-us': 'text-blue max-[1100px]:text-green',
};

export { getSections, wrapperVariants, linkVariants };
