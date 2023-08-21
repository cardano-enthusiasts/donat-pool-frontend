import type { Metadata } from 'next';

import Layout from '@/shared/components/Layout';

import { terms } from './data';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Terms of use',
};

export default () => {
  return (
    <Layout>
      <div className="mx-auto max-w-[52.25rem]">
        <h1 className="mb-8 font-rammetto-one text-[3.375rem] leading-[3.5rem] text-red">
          Donat.Pool <span className="text-green">Terms of Use</span>
        </h1>
        <p className="mb-8">
          Your access and use of the Donat.Pool Services constitutes your agreement to be bound by these Terms.
        </p>
        <ol className={`${styles.list} list-inside space-y-3`}>
          {terms.map(({ term, subTerms }) => (
            <li key={term} className="text-2xl">
              {term}
              <ol className="mt-1 list-inside space-y-1 pl-5">
                {subTerms.map((subTerm) => (
                  <li key={subTerm} className="text-base">
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
};