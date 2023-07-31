import { type LandingSection } from 'shared/types';

const getSections = (
  currentSection,
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
    title: 'About us',
    isActive: currentSection === 'about-us',
    id: 'about-us',
  },
  {
    title: 'Roadmap',
    isActive: currentSection === 'roadmap' || currentSection === 'contact-us',
    id: 'roadmap',
  },
];

export { getSections };
