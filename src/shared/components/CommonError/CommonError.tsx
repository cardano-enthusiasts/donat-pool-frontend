import { PropsWithChildren } from 'react';

const CommonError = ({ children }: PropsWithChildren) => {
  return <div className="base-wrapper bg-error py-5 text-center font-bold text-white">{children}</div>;
};

export { CommonError };
