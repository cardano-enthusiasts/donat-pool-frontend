import NextHead from 'next/head';

import Header from 'shared/components/Header/Header';

import type { Props } from './types';

const Base = ({ keywords, description, title, children }: Props) => {
  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </NextHead>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Base;
