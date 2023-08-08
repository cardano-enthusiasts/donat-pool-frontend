import { Wrapper } from './CommonError.styled';
import type { Props } from './types';

const CommonError = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export { CommonError };
