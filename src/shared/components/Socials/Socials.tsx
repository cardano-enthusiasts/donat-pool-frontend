import Image from 'next/image';
import Link from 'next/link';

function Socials() {
  return (
    <div className="flex gap-10">
      <Link target="_blank" rel="noreferrer" href="https://github.com/fullstack-development">
        <Image src="/icons/github.svg" alt="github" width={49} height={48} />
      </Link>
      <Link target="_blank" rel="noreferrer" href="https://twitter.com/DonatPool">
        <Image src="/icons/twitter.svg" alt="twitter" width={49} height={48} />
      </Link>
    </div>
  );
}

export { Socials };
