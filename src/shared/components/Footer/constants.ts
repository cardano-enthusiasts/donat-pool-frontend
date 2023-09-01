import { type StaticImageData } from 'next/image';

import { ROUTES } from '@/shared/constants';
import githubLogo from '@public/icons/github.svg';
import twitterLogo from '@public/icons/twitter.svg';

const SOCIALS = [
  {
    logoSrc: githubLogo as StaticImageData,
    logoAlt: "github's logo",
    href: 'https://github.com/fullstack-development',
  },
  {
    logoSrc: twitterLogo as StaticImageData,
    logoAlt: "twitter's logo",
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
