import { FakeDonatPoolCard } from '@/shared/components';

function NoDonatPool() {
  return (
    <div className="w-full">
      <div className="mb-15 text-center">
        There are no projects yet. But you can be the first to create a Donat.Pool
      </div>
      <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
        <FakeDonatPoolCard />
        <FakeDonatPoolCard />
        <FakeDonatPoolCard />
      </div>
    </div>
  );
}

export default NoDonatPool;
