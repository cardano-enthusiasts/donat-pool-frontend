'use client';

import { useState } from 'react';

import { Modal, SecondaryButton, PrimaryButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import HappyCatImage from '@public/images/happy-cat.svg';

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
        <HappyCatImage className="mb-10" />
        <div className="mb-8 text-center">
          The Donat.Pool has been successfully published.
          <br />
          Copy the link to your project to share it and get donations.
        </div>
        {isSuccessfullyCopied ? (
          <>
            <div className="mb-8 text-center">Link copied to clipboard.</div>
            <SecondaryButton stretchy size="lg" backgroundTheme="white" textTheme="blue" onClick={onClose}>
              Close the window
            </SecondaryButton>
          </>
        ) : (
          <>
            <a className={`${styles.link} text-blue`}>{link}</a>
            <PrimaryButton stretchy size="lg" onClick={handleCopyLinkClick}>
              Copy link and share
            </PrimaryButton>
          </>
        )}
      </div>
    </Modal>
  );
}

export default ModalProjectCreated;
