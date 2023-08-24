import type { Props } from './types';

const DEFAULT_PARAMS: Array<{
  title: string;
  id: keyof Props['config'];
  amount: number;
  hint: string;
}> = [
  {
    title: 'Min amount',
    id: 'minAmountParam',
    amount: 50000000,
    hint: 'ADA',
  },
  {
    title: 'Max amount',
    id: 'maxAmountParam',
    amount: 1000000000,
    hint: 'ADA',
  },
  {
    title: 'Min duration',
    id: 'minDurationParam',
    amount: 100,
    hint: 'min',
  },
  {
    title: 'Max duration',
    id: 'maxDurationParam',
    amount: 1000,
    hint: 'min',
  },
  {
    title: 'Protocol fee',
    id: 'protocolFeeParam',
    amount: 10,
    hint: '%',
  },
];

export { DEFAULT_PARAMS };
