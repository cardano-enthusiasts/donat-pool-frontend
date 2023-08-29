'use client';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl flex-grow px-20 pb-40 pt-20 max-xl:p-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
