import { useState } from 'react';

import { Description, Img, Inner, ProjectLink, Title } from './ModalProjectCreated.styled';
import type { Props } from './types';
import { DoubleBorderedButton, Modal, StandardButton } from '../.';

const ModalProjectCreated = ({ isOpen, onClose, path }: Props) => {
  const link = `${location.origin}/my-projects/${path}`;
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
            <DoubleBorderedButton backgroundColor="white" primaryColor="blue" isFullWidth={true} onClick={onClose}>
              Close the window
            </DoubleBorderedButton>
          </>
        ) : (
          <>
            <ProjectLink>{link}</ProjectLink>
            <StandardButton
              primaryColor="red"
              secondaryColor="blue"
              isFullWidth={true}
              onClick={handleCopyLinkClick}
              fontColor="white"
            >
              Copy link
            </StandardButton>
          </>
        )}
      </Inner>
    </Modal>
  );
};

export { ModalProjectCreated };
