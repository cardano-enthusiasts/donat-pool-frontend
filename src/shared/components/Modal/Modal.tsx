import type { FC } from 'react';

import type { Props } from './types';

const Modal: FC<Props> = ({ isOpen, children }) => {
  const content = (
    <div className="fixed left-0 top-0 z-[101] flex h-full w-full items-start justify-center overflow-y-auto bg-[#4757e666]">
      <div className="fixed z-[100] h-full w-full" />
      <section className="relative z-[101] my-[6.25rem] h-max w-[37.5rem] rounded-md bg-white px-10 pb-15 pt-10 shadow-modal max-md:my-10 max-md:w-[90%] max-md:p-5">
        {children}
      </section>
    </div>
  );

  return isOpen && content;
};

export { Modal };
