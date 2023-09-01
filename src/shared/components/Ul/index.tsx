import HTMLReactParser from 'html-react-parser';

import type { Props } from './types';

function Ul({ texts }: Props) {
  return (
    <ul className="list-disc pl-5">
      {texts.map((text) => (
        <li className="mb-6 last:mb-0" key={text}>
          {HTMLReactParser(text)}
        </li>
      ))}
    </ul>
  );
}

export default Ul;
