import { Link, Wrapper } from './LandingNav.styled';
import { type Props } from './types';

const LandingNav = ({ currentSection }: Props) => {
  const sections = [
    { title: 'Home', isActive: true },
    { title: 'How it works', isActive: false },
    { title: 'Why choose us', isActive: false },
    { title: 'About us', isActive: false },
    { title: 'Roadmap', isActive: false },
  ];
  return (
    <Wrapper currentSection={currentSection}>
      {sections.map(({ title, isActive }) => (
        <Link key={title} isActive={isActive} currentSection={currentSection}>
          {title}
        </Link>
      ))}
    </Wrapper>
  );
};

export { LandingNav };
