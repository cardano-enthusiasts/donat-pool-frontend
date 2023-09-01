import { type LandingSection } from '@/shared/types';

function getSections(currentSection: string): {
  title: string;
  active: boolean;
  id: LandingSection;
}[] {
  return [
    { title: 'Home', active: currentSection === 'home', id: 'home' },
    {
      title: 'How it works',
      active: currentSection === 'how-it-works',
      id: 'how-it-works',
    },
    {
      title: 'Why choose us',
      active: currentSection === 'why-choose-us',
      id: 'why-choose-us',
    },
    {
      title: 'Meet our team',
      active: currentSection === 'about-us',
      id: 'about-us',
    },
    {
      title: 'Roadmap',
      active: currentSection === 'roadmap' || currentSection === 'contact-us',
      id: 'roadmap',
    },
  ];
}

const wrapperVariants: { [key in LandingSection]: string } = {
  home: 'max-xl:bg-blue',
  'how-it-works': 'max-xl:bg-green',
  'why-choose-us': 'max-xl:bg-red',
  'about-us': 'max-xl:bg-yellow',
  roadmap: 'max-xl:bg-black',
  'contact-us': 'max-xl:bg-black',
};

const linkVariants: { [key in LandingSection]: string } = {
  home: 'text-green max-xl:text-white',
  'how-it-works': 'text-red max-xl:text-yellow',
  'why-choose-us': 'text-yellow max-xl:text-blue',
  'about-us': 'text-green max-xl:text-red',
  roadmap: 'text-blue max-xl:text-green',
  'contact-us': 'text-blue max-xl:text-green',
};

export { getSections, wrapperVariants, linkVariants };
