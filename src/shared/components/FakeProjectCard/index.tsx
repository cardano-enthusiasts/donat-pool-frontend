import { ADAIcon } from '@/shared/components';

function FakeProjectCard() {
  return (
    <div
      className="z-[-1]
      flex
      w-full
      select-none
      flex-col
      rounded-md
      border-2
      border-red
      bg-white
      px-4
      pb-6
      pt-7
      text-red
      opacity-50
      shadow-[-0.25rem_0.25rem_0]
      shadow-red
      max-lg:p-5
      max-sm:p-3"
    >
      <h3 className="mb-[4.3125rem] text-xl font-bold">Project title</h3>
      <div className="flex w-full justify-between border-t-2 border-t-red pt-4">
        <div className="leading-none">00.00 — 00.00</div>
        <div className="flex">
          <div className="mr-1 flex font-bold leading-none">00</div>
          <ADAIcon color="red" />
        </div>
      </div>
    </div>
  );
}

export default FakeProjectCard;
