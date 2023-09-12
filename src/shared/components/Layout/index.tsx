import { Header, Footer, CommonError } from '@/shared/components';

import type { Props } from './types';

function Layout({ children, error }: React.PropsWithChildren<Props>) {
  return (
    <div className="mx-auto flex min-h-screen min-w-[22.5rem] max-w-screen-fhd flex-col">
      <Header />
      {error && <CommonError>{error}</CommonError>}
      <main className="w-full flex-grow px-20 pb-40 pt-20 max-md:px-8 max-md:pb-20 max-md:pt-[3.5rem]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
