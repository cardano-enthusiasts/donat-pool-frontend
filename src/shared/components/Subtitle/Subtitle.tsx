import { PropsWithChildren } from 'react';

function Subtitle({ children }: PropsWithChildren) {
  return <h3 className="mb-3 text-[1.25rem] font-bold text-gray-tertiary">{children}</h3>;
}

export { Subtitle };
