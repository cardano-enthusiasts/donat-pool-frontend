import { ROUTES } from '@/shared/constants';
import GithubLogo from '@public/icons/github.svg';
import TwitterLogo from '@public/icons/twitter.svg';

const SOCIALS = [
  {
    logo: <GithubLogo />,
    href: 'https://github.com/fullstack-development',
  },
  {
    logo: <TwitterLogo />,
    href: 'https://twitter.com/DonatPool',
  },
] as const;

const LINKS = [
  {
    title: 'Home',
    href: ROUTES.home,
  },
  {
    title: 'FAQ',
    href: ROUTES.faq,
  },
  {
    title: 'Terms of use',
    href: ROUTES.termsOfUse,
  },
] as const;

export { SOCIALS, LINKS };
