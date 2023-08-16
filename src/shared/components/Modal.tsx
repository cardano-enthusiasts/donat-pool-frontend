import { Dialog } from '@headlessui/react';

export default ({
  open,
  title,
  children,
  onClose = () => undefined,
}: React.PropsWithChildren<{ open: boolean; title?: string; onClose?: () => void }>) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 bg-blue/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-5">
        <Dialog.Panel className="max-h-full w-11/12 overflow-y-auto rounded-md bg-white p-5 shadow-[0_15px_40px_theme(colors.blue.DEFAULT)] md:w-[37.5rem] md:px-10 md:pb-15 md:pt-10">
          {title && <Dialog.Title>{title}</Dialog.Title>}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
