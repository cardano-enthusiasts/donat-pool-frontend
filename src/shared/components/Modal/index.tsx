'use client';

import { Dialog } from '@headlessui/react';

import { PANEL_THEME_TO_CLASS_NAME } from './constants';
import { Props } from './types';

function Modal({
  shown,
  panelTheme = 'light',
  title,
  titleAs,
  children,
  onClose = () => undefined,
}: React.PropsWithChildren<Props>) {
  return (
    <Dialog className="fixed inset-0 flex items-center justify-center bg-blue/40 p-5" open={shown} onClose={onClose}>
      <Dialog.Panel
        className={`${PANEL_THEME_TO_CLASS_NAME[panelTheme]}
          max-h-full
          w-[37.5rem]
          overflow-y-auto
          rounded-md
          px-10
          pb-15
          pt-10
          shadow-[0_0.9375rem_2.5rem_theme(colors.blue.DEFAULT)]
          max-md:w-11/12
          max-md:p-5`}
      >
        {title && (
          <Dialog.Title className="mb-6 font-rammetto-one text-menu-active text-red" as={titleAs}>
            {title}
          </Dialog.Title>
        )}
        {children}
      </Dialog.Panel>
    </Dialog>
  );
}

export default Modal;
