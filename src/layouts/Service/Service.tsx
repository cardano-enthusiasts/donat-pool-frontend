'use client';

import { PropsWithChildren } from 'react';

import { Footer, Header } from '@/shared/components';

const Service = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="base-wrapper">
        <div className=" mx-0 mb-40 mt-20 w-full max-w-[49.375rem] max-sm:mb-15 max-sm:mt-10">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { Service };
