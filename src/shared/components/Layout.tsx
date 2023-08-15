import type { PropsWithChildren } from '@/shared/types';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
