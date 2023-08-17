import { useAppSelector } from '@/shared/hooks';

import Modal from './Modal';
// installed, icon, connected
const ConnectWalletModal = () => {
  const providers = useAppSelector((state) => state.cardano.providers);

  return (
    <Modal open panelTheme="dark" title="Connect wallet" titleAs="h1">
      <ul>
        {providers.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Modal>
  );
};

export default ConnectWalletModal;
