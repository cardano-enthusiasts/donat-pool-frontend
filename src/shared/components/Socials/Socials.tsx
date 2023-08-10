import { Img, Link, Wrapper } from './Socials.styled';

const Socials = () => {
  return (
    <Wrapper>
      <Link target="_blank" rel="noreferrer" href="https://github.com/fullstack-development">
        <Img src="/icons/github.svg" />
      </Link>
      <Link target="_blank" rel="noreferrer" href="https://twitter.com/DonatPool">
        <Img src="/icons/twitter.svg" />
      </Link>
    </Wrapper>
  );
};

export { Socials };
