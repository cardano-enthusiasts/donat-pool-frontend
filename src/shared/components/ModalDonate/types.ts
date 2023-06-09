import { type FundraisingData, type Fundraising } from 'shared/types';

export interface Props {
  donate: (fundraisingData: FundraisingData, amount: number) => void;
  isOpen: boolean;
  onClose: () => void;
  data: Pick<Fundraising, 'threadTokenCurrency' | 'threadTokenName'>;
}
