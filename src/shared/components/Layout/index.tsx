import { Header, Footer } from '@/shared/components';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto flex min-h-screen min-w-[20rem] max-w-screen-fhd flex-col">
      <Header />
      <main className="w-full flex-grow px-20 pb-40 pt-20 max-md:px-7.5 max-md:pb-7.5 max-md:pt-[3.5rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
