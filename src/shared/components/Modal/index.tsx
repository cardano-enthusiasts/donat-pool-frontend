'use client';

import { Dialog } from '@headlessui/react';
import cn from 'classnames';

import type { Props } from './types';

function Modal({
  panelTheme = 'white',
  title,
  titleAs,
  description,
  error,
  children,
  onClose = () => undefined,
}: Props) {
  return (
    <Dialog className="fixed inset-0 z-[1] flex items-center justify-center bg-blue/40 p-5" open onClose={onClose}>
      <Dialog.Panel
        className={cn(
          `max-h-full 
          w-[37.5rem]
          overflow-y-auto
          overscroll-y-none
          rounded-md
          shadow-[0_0.9375rem_2.5rem_theme(colors.blue.DEFAULT)]
          max-md:w-full`,
          {
            'bg-white': panelTheme === 'white',
            'bg-black': panelTheme === 'black',
          },
        )}
      >
        {error && (
          <div className="rounded-t-md bg-error px-20 py-5 text-center font-bold text-white max-md:px-5">{error}</div>
        )}
        <div className="px-10 pb-15 pt-10 max-md:p-5">
          {title && (
            <Dialog.Title
              className="mb-6 text-center font-rammetto-one text-menu-active text-red max-md:text-[2.25rem]/[2.25rem]"
              as={titleAs}
            >
              {title}
            </Dialog.Title>
          )}
          {description && <Dialog.Description className="mb-6 text-center">{description}</Dialog.Description>}
          {children}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default Modal;
