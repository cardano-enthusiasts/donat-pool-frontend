import { Footer, Header } from '@/shared/components';

function Service({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="base-wrapper">
        <div className=" mx-0 mb-40 mt-20 w-full max-w-[49.375rem] max-sm:mb-15 max-sm:mt-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Service;
