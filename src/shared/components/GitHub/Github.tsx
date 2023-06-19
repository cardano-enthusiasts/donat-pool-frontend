import { Img, Link } from './GitHub.styled';

const GitHub = () => {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href="https://github.com/fullstack-development"
    >
      <Img src="/icons/github.svg" />
    </Link>
  );
};

export { GitHub };
