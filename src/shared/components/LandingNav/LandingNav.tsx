import { Link, Wrapper } from './LandingNav.styled';

const LandingNav = () => {
  const sections = [
    { title: 'Home', isActive: true },
    { title: 'How it works', isActive: false },
    { title: 'Why choose us', isActive: false },
    { title: 'About us', isActive: false },
    { title: 'Roadmap', isActive: false },
  ];
  return (
    <Wrapper>
      {sections.map(({ title, isActive }) => (
        <Link key={title} isActive={isActive}>
          {title}
        </Link>
      ))}
    </Wrapper>
  );
};

export { LandingNav };
