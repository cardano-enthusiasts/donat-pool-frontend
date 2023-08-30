'use client';

import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl flex-grow px-20 pb-40 pt-20 max-xl:p-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
