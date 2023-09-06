import { ROUTES } from '@/shared/constants';

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

export { LINKS };
