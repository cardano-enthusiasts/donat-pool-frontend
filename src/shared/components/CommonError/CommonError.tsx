import { Props } from './types';

const CommonError = ({ children }: Props) => {
  return <div className="base-wrapper bg-error py-5 text-center font-bold text-white">{children}</div>;
};

export { CommonError };
