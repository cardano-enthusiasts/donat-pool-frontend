import { type StaticImageData } from 'next/image';

interface Photo {
  src: StaticImageData;
  className: string;
  alt: string;
  isFirstRow: boolean;
}

export type { Photo };
