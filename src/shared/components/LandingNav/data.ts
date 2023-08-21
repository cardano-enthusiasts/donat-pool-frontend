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
  home: 'max-[68.75rem]:bg-blue',
  'how-it-works': 'max-[68.75rem]:bg-green',
  'why-choose-us': 'max-[68.75rem]:bg-red',
  'about-us': 'max-[68.75rem]:bg-yellow',
  roadmap: 'max-[68.75rem]:bg-black',
  'contact-us': 'max-[68.75rem]:bg-black',
};

const linkVariants: { [key in LandingSection]: string } = {
  home: 'text-green max-[68.75rem]:text-white',
  'how-it-works': 'text-red max-[68.75rem]:text-yellow',
  'why-choose-us': 'text-yellow max-[68.75rem]:text-blue',
  'about-us': 'text-green max-[68.75rem]:text-red',
  roadmap: 'text-blue max-[68.75rem]:text-green',
  'contact-us': 'text-blue max-[68.75rem]:text-green',
};

export { getSections, wrapperVariants, linkVariants };
