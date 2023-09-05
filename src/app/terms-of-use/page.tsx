import type { Metadata } from 'next';

import { Layout } from '@/shared/components';

import { terms } from './data';
import styles from './styles.module.css';

const metadata: Metadata = {
  title: 'Terms of use',
};

function Page() {
  return (
    <Layout>
      <div className="mx-auto max-w-[52.375rem]">
        <h1 className="mb-8 font-rammetto-one text-menu-active text-red max-md:text-[2.25rem]/[2.25rem]">
          Donat.Pool <span className="text-green">Terms of Use</span>
        </h1>
        <p className="mb-8">
          Your access and use of the Donat.Pool Services constitutes your agreement to be bound by these Terms.
        </p>
        <ol className={`${styles.list} list-inside space-y-3`}>
          {terms.map(({ term, subTerms }) => (
            <li className="text-2xl" key={term}>
              {term}
              <ol className="mt-1 list-inside space-y-1 pl-5">
                {subTerms.map((subTerm) => (
                  <li className="text-base" key={subTerm}>
                    {subTerm}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}

export { Page as default, metadata };
