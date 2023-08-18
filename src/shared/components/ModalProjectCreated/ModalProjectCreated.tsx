import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import styles from './ModalProjectCreated.module.css';
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
      <div className="flex flex-col items-center">
        <h1 className="mb-6 text-center">Well done!</h1>
        <Image className="mb-10" src="/img/happy-cat.svg" alt="happy cat" width={140} height={140} />
        <div className="mb-8 text-center">
          The project has been successfully published.
          <br />
          Copy the link to your project to share it and get donations.
        </div>
        {isSuccessfullyCopied ? (
          <>
            <div className="mb-8 text-center">Link copied to clipboard.</div>
            <DoubleBorderedButton backgroundColor="white" primaryColor="blue" isFullWidth={true} onClick={onClose}>
              Close the window
            </DoubleBorderedButton>
          </>
        ) : (
          <>
            <a className={classNames(styles.link, 'mb-6 text-center text-xl font-bold text-blue')}>{link}</a>
            <StandardButton
              primaryColor="red"
              secondaryColor="blue"
              isFullWidth={true}
              onClick={handleCopyLinkClick}
              fontColor="white"
            >
              Copy link and share
            </StandardButton>
          </>
        )}
      </div>
    </Modal>
  );
};

export { ModalProjectCreated };
