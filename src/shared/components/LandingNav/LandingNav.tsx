import { Link, Wrapper } from './LandingNav.styled';
import { type Props } from './types';
import { Button } from '../Button/Button';

const LandingNav = ({ currentSection }: Props) => {
  const sections = [
    { title: 'Home', isActive: currentSection === 'home' },
    { title: 'How it works', isActive: currentSection === 'how it works' },
    { title: 'Why choose us', isActive: currentSection === 'why choose us' },
    { title: 'About us', isActive: currentSection === 'about us' },
    { title: 'Roadmap', isActive: currentSection === 'roadmap' },
  ];
  return (
    <Wrapper currentSection={currentSection}>
      {sections.map(({ title, isActive }) => (
        <Link key={title} isActive={isActive} currentSection={currentSection}>
          {title}
        </Link>
      ))}
      {currentSection !== 'home' && (
        <Button themeType="primary" primaryColor="red" secondaryColor="blue">
          Create an account
        </Button>
      )}
    </Wrapper>
  );
};

export { LandingNav };
