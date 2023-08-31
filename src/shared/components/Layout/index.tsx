import { Header, Footer } from '@/shared/components';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-fhd flex-col">
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl flex-grow px-20 pb-40 pt-20 max-md:p-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
