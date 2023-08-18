import { ROUTES } from '@/shared/constants';

const LINKS: Array<{
  title: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}> = [
  { title: 'Home', href: ROUTES.home },
  { title: 'About us on MetaLamp', href: ROUTES.mock },
  { title: 'Terms of use', href: ROUTES.mock },
  { title: 'FAQ', href: ROUTES.faq },
];

export { LINKS };
