import { Footer, Header } from '@/shared/components';

import type { Props } from './types';

const Service = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="base-wrapper">
        <div className="base-inner mx-0 mb-40 mt-20 max-w-[790px] max-sm:mb-[60px] max-sm:mt-10">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { Service };
