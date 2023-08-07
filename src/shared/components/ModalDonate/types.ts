import { type Fundraising } from '@/shared/types';
import { type FundraisingData } from '@/shared/types/common';

export interface Props {
  donate: (fundraisingData: FundraisingData, amount: number) => void;
  isOpen: boolean;
  onClose: () => void;
  data: Pick<Fundraising, 'threadTokenCurrency' | 'threadTokenName'>;
}
