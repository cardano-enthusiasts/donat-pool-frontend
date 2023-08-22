import Image from 'next/image';

import { DoubleBorderedButton, Waves } from '..';

const NotAvailableError = () => {
  return (
    <form className="mx-auto flex h-[100vh] min-h-[41.875rem] w-full flex-col justify-between bg-red">
      <div className="h-[calc(100% - 6.25rem)] flex items-center justify-center">
        <div className="flex max-w-[37.5rem] flex-col items-center px-10 pb-15 pt-10">
          <h1 className="mb-6 text-center font-rammetto-one text-[3.375rem] leading-[104%] text-white max-lg:text-[36px] max-sm:text-[2.25rem]">
            Wallet is not available{' '}
          </h1>
          <Image src="/img/sad-cat-with-purple-border.svg" alt="sad cat" width="140" height="140" />
          <div className="mb-8 text-center text-black">
            Please install Nami wallet in a suitable browser (Chrome, Brave)
          </div>
          <DoubleBorderedButton
            href="https://namiwallet.io/"
            primaryColor="blue"
            backgroundColor="red"
            isFullWidth={true}
          >
            Download App
          </DoubleBorderedButton>
        </div>
      </div>

      <Waves />
    </form>
  );
};

export { NotAvailableError };
