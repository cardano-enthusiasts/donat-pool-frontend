import type { Metadata } from 'next';

import { Layout, DropdownSection } from '@/shared/components';
import { APP_URL, ROUTES } from '@/shared/constants';

import { QUESTIONS } from './data';

const metadata: Metadata = {
  title: 'FAQ',
  description:
    'How to start a new project? What can I raise funds for? What is service fee? How to receive funds? Can I do partial withdrawal?',
  keywords: [
    'crowdfunding',
    'donation',
    'donations',
    'support',
    'community',
    'startup',
    'startups',
    'ideas',
    'funding',
    'funds',
    'faq',
    'questions',
    'answers',
    'terms',
  ],
  openGraph: {
    title: 'Donat.Pool: FAQ',
    description:
      'How to start a new project? What can I raise funds for? What is service fee? How to receive funds? Can I do partial withdrawal?',
    url: `${APP_URL}${ROUTES.faq}`,
  },
};

function Page() {
  return (
    <Layout>
      <div className="mx-auto max-w-[52.375rem]">
        <h1
          className="mb-8
          font-rammetto-one
          text-menu-active
          text-red
          max-md:text-[2.25rem]/[2.25rem]"
        >
          Donat.Pool <span className="text-green">FAQ</span>
        </h1>
        <div className="space-y-8">
          {QUESTIONS.map(({ title, content }) => (
            <DropdownSection key={title} title={title}>
              {content}
            </DropdownSection>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export { Page as default, metadata };
