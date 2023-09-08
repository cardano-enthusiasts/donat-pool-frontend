import ADA from '@public/icons/ADA.svg';

function FakeDonatPoolCard() {
  return (
    <div
      className="flex
        w-full
        select-none
        flex-col
        rounded-md
        border-2
        border-pink
        bg-white
        px-4
        pb-6
        pt-7
        text-pink
        shadow-[-0.25rem_0.25rem_0]
        shadow-pink
        max-lg:p-5
        max-sm:p-3"
    >
      <h3 className="mb-[4.3125rem] text-xl font-bold">Project title</h3>
      <div className="flex w-full justify-between border-t-2 border-t-pink pt-4">
        <div className="leading-none">00.00 — 00.00</div>
        <div className="flex">
          <div className="mr-1 flex font-bold leading-none">00</div>
          <ADA className="fill-pink" />
        </div>
      </div>
    </div>
  );
}

export default FakeDonatPoolCard;
