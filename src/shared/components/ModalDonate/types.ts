import { type Fundraising } from 'shared/types';

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: Pick<Fundraising, 'threadTokenCurrency' | 'threadTokenName'>;
}
