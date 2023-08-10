import { ROUTES } from '@/shared/constants';

const LINKS: Array<{
  title: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}> = [
  { title: 'Home', href: ROUTES.root },
  { title: 'About us on MetaLamp', href: ROUTES.mock },
  { title: 'Terms of use', href: ROUTES.mock },
  { title: 'FAQ', href: ROUTES.faq, target: '_blank' },
];

export { LINKS };
