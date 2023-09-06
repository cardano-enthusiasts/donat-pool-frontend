import Link from 'next/link';

import { SOCIALS } from './constants';

function Socials() {
  return (
    <ul className="flex gap-x-10">
      {SOCIALS.map(({ logo, href }) => (
        <li className="shrink-0" key={href}>
          <Link href={href} target="_blank" rel="noreferrer">
            {logo}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
