import { Header, Footer } from '@/shared/components';

import type { Props } from './types';

function Layout({ children, error }: Props) {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-fhd flex-col">
      <Header />
      {error && <div className="base-wrapper bg-error py-5 text-center font-bold text-white">{error}</div>}
      <main
        className="w-full
          flex-grow
          px-20
          pb-40
          pt-20
          max-md:px-8
          max-md:pb-20
          max-md:pt-[3.5rem]"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
