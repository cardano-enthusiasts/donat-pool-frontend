'use client';

import Image from 'next/image';
import { useState } from 'react';

import { DoubleBorderedButton, Modal, StandardButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

import styles from './styles.module.css';
import type { Props } from './types';

function ModalProjectCreated({ path, onClose }: Props) {
  const link = `${location.origin}${ROUTES.donatPools}/${path}`;
  const [isSuccessfullyCopied, setIsSuccessfullyCopied] = useState(false);

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(link);
      setIsSuccessfullyCopied(true);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
      setIsSuccessfullyCopied(false);
    }
  }

  function handleCopyLinkClick() {
    copyContent().catch(() => {
      setIsSuccessfullyCopied(false);
    });
  }

  return (
    <Modal>
      <div className="flex flex-col items-center">
        <h1
          className="mb-6
            text-center
            font-rammetto-one
            text-[3.375rem]/[104%]
            text-red
            max-lg:text-[2.25rem]
            max-sm:text-[2.25rem]"
        >
          Well done!
        </h1>
        <Image className="mb-10" src="/img/happy-cat.svg" alt="happy cat" width={140} height={140} />
        <div className="mb-8 text-center">
          The Donat.Pool has been successfully published.
          <br />
          Copy the link to your project to share it and get donations.
        </div>
        {isSuccessfullyCopied ? (
          <>
            <div className="mb-8 text-center">Link copied to clipboard.</div>
            <DoubleBorderedButton backgroundColor="white" primaryColor="blue" isFullWidth onClick={onClose}>
              Close the window
            </DoubleBorderedButton>
          </>
        ) : (
          <>
            <a className={`${styles.link} text-blue`}>{link}</a>
            <StandardButton
              primaryColor="red"
              secondaryColor="blue"
              isFullWidth
              fontColor="white"
              onClick={handleCopyLinkClick}
            >
              Copy link and share
            </StandardButton>
          </>
        )}
      </div>
    </Modal>
  );
}

export default ModalProjectCreated;
