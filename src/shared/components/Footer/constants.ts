import { ROUTES } from '@/shared/constants';

const LINKS: Array<{
  title: string;
  href: string;
}> = [
  { title: 'Home', href: ROUTES.home },
  { title: 'FAQ', href: ROUTES.faq },
  { title: 'Terms of use', href: ROUTES.termsOfUse },
];

export { LINKS };
