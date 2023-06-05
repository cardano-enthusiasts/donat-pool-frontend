import {
  Description,
  Img,
  Inner,
  ProjectLink,
  Title,
} from './ModalProjectCreated.styled';
import { Button, Modal } from '../.';

const ModalProjectCreated = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Inner>
        <Title>Well done!</Title>
        <Img src="img/happy-cat.svg" alt="happy cat" />
        <Description>
          The project has been successfully published.
          <br />
          Copy the link to your project to share it and get donations.
        </Description>
        <ProjectLink>
          https://donationpool/opium/pool/PEER_2_POOL_OPTION_CALL_ETH_V3
        </ProjectLink>
        <Button primaryColor="red" secondaryColor="blue" width="100%">
          Copy link
        </Button>
      </Inner>
    </Modal>
  );
};

export { ModalProjectCreated };
