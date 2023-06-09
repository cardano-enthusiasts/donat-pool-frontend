import { useState } from 'react';

import {
  Description,
  Img,
  Inner,
  ProjectLink,
  Title,
} from './ModalProjectCreated.styled';
import { Button, Modal } from '../.';

const ModalProjectCreated = ({ isOpen, onClose }) => {
  const link = 'https://donationpool/opium/pool/PEER_2_POOL_OPTION_CALL_ETH_V3';
  const [isSuccessfullyCopied, setIsSuccessfullyCopied] = useState(false);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsSuccessfullyCopied(true);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
      setIsSuccessfullyCopied(false);
    }
  };

  const handleCopyLinkClick = () => {
    copyContent().catch(() => {
      setIsSuccessfullyCopied(false);
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <Inner>
        <Title>Well done!</Title>
        <Img src="/img/happy-cat.svg" alt="happy cat" />
        <Description>
          The project has been successfully published.
          <br />
          Copy the link to your project to share it and get donations.
        </Description>
        {isSuccessfullyCopied ? (
          <>
            <Description>Link copied to clipboard.</Description>
            <Button
              themeType="tertiary"
              primaryColor="blue"
              width="100%"
              onClick={onClose}
            >
              Close the window
            </Button>
          </>
        ) : (
          <>
            <ProjectLink>{link}</ProjectLink>
            <Button
              primaryColor="red"
              secondaryColor="blue"
              width="100%"
              onClick={handleCopyLinkClick}
            >
              Copy link
            </Button>
          </>
        )}
      </Inner>
    </Modal>
  );
};

export { ModalProjectCreated };
