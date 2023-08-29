'use client';

import Image from 'next/image';

import { useWindowSize } from '@/shared/hooks';

import styles from './AboutUs.module.css';
import { PHOTOS } from './constants';
import { AccentButton, Stack } from '../.';

function AboutUs() {
  const { width: windowWidth } = useWindowSize();

  function getPhotos(isFirstRow: boolean) {
    const filteredPhotos = isFirstRow
      ? PHOTOS.filter(({ isFirstRow }) => isFirstRow)
      : PHOTOS.filter(({ isFirstRow }) => !isFirstRow);

    return filteredPhotos.map(({ title, className, alt, width, height }) => (
      <Image className={className} src={`/img/${title}.png`} alt={alt} width={width} height={height} key={title} />
    ));
  }

  return (
    <div className="mb-36 max-xl:mb-10 max-md:mb-0">
      <div className="relative flex flex-col items-center">
        <div className={styles.team}>
          {getPhotos(true)}
          {windowWidth > 1430 ? getPhotos(false) : <div className={styles.second}>{getPhotos(false)}</div>}
        </div>
        <div className={styles.dots} />
      </div>

      <div className="mb-[8.75rem] flex self-start max-xl:mb-12 max-xl:justify-center">
        <AccentButton primaryColor="blue" secondaryColor="red" fontColor="red" animated>
          Donate
          <br /> To Us
        </AccentButton>
      </div>
      <div className="mb-10">
        <Stack />
      </div>
    </div>
  );
}

export default AboutUs;
