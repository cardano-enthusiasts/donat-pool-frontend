import type { Metadata } from 'next';

import { Layout } from '@/shared/components';
import { roadmapText } from '@/shared/data';
import { isSubItem } from '@/shared/type-guards';
import type { Item, SubItem } from '@/shared/types';

const metadata: Metadata = {
  title: 'Donat.Pool: Roadmap',
  description: 'Where we are now and where we want to be.',
};

function Page() {
  function createSubItems(item: Item) {
    return item.subItems.map(({ id, title }: SubItem) => (
      <li className="ml-6" key={id}>
        {title}
      </li>
    ));
  }

  return (
    <Layout>
      <div className="mx-auto max-w-[52.375rem]">
        <h1
          className="mb-8
          font-rammetto-one
          text-menu-active
          text-red
          max-md:text-[2.25rem]/[2.25rem]"
        >
          Donat.Pool <span className="text-green">roadmap</span>
        </h1>
        <div className="space-y-8">
          {roadmapText.phases.map(({ title, items }) => (
            <div className="rounded-md p-6 shadow-xl" key={title}>
              <h2 className="text-2xl font-bold [&_span]:text-red" dangerouslySetInnerHTML={{ __html: title }} />
              <ul className="mt-6 list-disc pl-6">
                {items.map((item) => (isSubItem(item) ? <li key={item.id}>{item.title}</li> : createSubItems(item)))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export { Page as default, metadata };
