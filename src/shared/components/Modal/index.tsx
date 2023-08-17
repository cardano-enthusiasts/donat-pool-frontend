import { Dialog } from '@headlessui/react';

import { PANEL_THEME_TO_CLASSNAME } from './constants';

const Modal = ({
  open,
  panelTheme = 'light',
  title,
  titleAs,
  children,
  onClose = () => undefined,
}: React.PropsWithChildren<{
  open: boolean;
  panelTheme?: 'light' | 'dark';
  title?: string;
  titleAs?: React.ElementType;
  onClose?: () => void;
}>) => {
  return (
    <Dialog className="fixed inset-0 flex items-center justify-center bg-blue/40 p-5" open={open} onClose={onClose}>
      <Dialog.Panel
        className={`${PANEL_THEME_TO_CLASSNAME[panelTheme]} max-h-full w-11/12 overflow-y-auto rounded-md bg-white p-5 shadow-[0_15px_40px_theme(colors.blue.DEFAULT)] md:w-[37.5rem] md:px-10 md:pb-15 md:pt-10`}
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
};

export default Modal;
