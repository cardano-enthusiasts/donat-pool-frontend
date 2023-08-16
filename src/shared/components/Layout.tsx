import Footer from './Footer/Footer';
import { Header } from './Header/Header';

export default ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl flex-grow p-10 xl:px-20 xl:pb-40 xl:pt-20">{children}</main>
      <Footer />
    </div>
  );
};
