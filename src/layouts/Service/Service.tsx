import { PropsWithChildren } from 'react';

import { Footer, Header } from '@/shared/components';

const Service = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="base-wrapper">
        <div className="base-inner mx-0 mb-40 mt-20 max-w-[49.375rem] max-sm:mb-[3.75rem] max-sm:mt-10">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { Service };
