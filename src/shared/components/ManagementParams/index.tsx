import AdaIcon from '@public/icons/ADA-gray.svg';

import type { Props } from './types';

function ManagementParams({
  config: { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam, protocolFeeParam },
}: Props) {
  const params = [
    {
      title: 'Min amount',
      id: 'minAmountParam',
      amount: minAmountParam,
      label: 'ADA',
    },
    {
      title: 'Max amount',
      id: 'maxAmountParam',
      amount: maxAmountParam,
      label: 'ADA',
    },
    {
      title: 'Min duration',
      id: 'minDurationParam',
      amount: minDurationParam,
      label: 'min',
    },
    {
      title: 'Max duration',
      id: 'maxDurationParam',
      amount: maxDurationParam,
      label: 'min',
    },
    {
      title: 'Protocol fee',
      id: 'protocolFeeParam',
      amount: protocolFeeParam,
      label: '%',
    },
  ];

  return (
    <div className="flex max-w-[20.25rem] shrink-0 flex-col gap-6 p-6 shadow-xl">
      <h3 className="m-0 text-xl font-bold">Current protocol parameters</h3>
      <div className="border-1 border-black" />
      {params.map(({ title, id, amount, label }) => (
        <div className="flex justify-between gap-[1.875rem]" key={id}>
          <div>
            {title}
            <span className="ml-2 text-gray">{label === 'ADA' ? <AdaIcon /> : label}</span>
          </div>
          <div className="font-bold">{amount}</div>
        </div>
      ))}
    </div>
  );
}

export default ManagementParams;
