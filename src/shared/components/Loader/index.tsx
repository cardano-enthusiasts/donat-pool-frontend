'use client';

import Image from 'next/image';

import ProgressBarImage from '@public/images/progress-bar.gif';

function Loader() {
  return <Image className="mx-auto" src={ProgressBarImage} alt="waking up cat" />;
}

export default Loader;
