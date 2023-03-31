import { errors, walletIsNotAvailable } from 'shared/constants/errors';

import { Container } from './NotAvailableError.styled';

const NotAvailableError = () => {
  return <Container>{errors[walletIsNotAvailable]}</Container>;
};

export { NotAvailableError };
