import HTMLReactParser from 'html-react-parser';
import { Metadata } from 'next';

import { Service } from '@/shared/components';
import { roadmapText } from '@/shared/data';
import { isSubItem } from '@/shared/typeGuards';
import { Item, SubItem } from '@/shared/types';

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
    <Service>
      <h1
        className="mb-8
          font-rammetto-one
          text-[3.375rem]/[104%]
          text-red
          max-lg:text-[2.25rem]
          max-sm:text-[2.25rem]"
      >
        Donat.Pool <span className="text-green">roadmap</span>
      </h1>
      <div className="grid gap-8">
        {roadmapText.phases.map(({ title, items }) => (
          <div className="rounded-md p-6 shadow-xl" key={title}>
            <h2 className="text-2xl font-bold [&_span]:text-red">{HTMLReactParser(title)}</h2>
            <ul className="mt-6 list-disc pl-6">
              {items.map((item) => (isSubItem(item) ? <li key={item.id}>{item.title}</li> : createSubItems(item)))}
            </ul>
          </div>
        ))}
      </div>
    </Service>
  );
}

export { Page as default, metadata };
