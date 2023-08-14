'use client';

import HTMLReactParser from 'html-react-parser';

import { Service } from '@/layouts';
import { roadmapText } from '@/shared/data';

import { ColorTitle, Li, Phase, PhaseTitle, Phases, SubLi, Title, Ul } from './RoadmapForReading.styled';

const Page = () => {
  const getSubLis = (item: any) => {
    return item.subItems.map(({ id, title }: any) => <SubLi key={id}>{title}</SubLi>);
  };

  return (
    <Service>
      <Title>
        Donat.Pool <ColorTitle>roadmap</ColorTitle>
      </Title>
      <Phases>
        {roadmapText.phases.map(({ title, items }) => (
          <Phase key={title}>
            <PhaseTitle>{HTMLReactParser(title)}</PhaseTitle>
            <Ul>
              {items.map((item) => {
                return Object.hasOwn(item, 'title') ? <Li key={item.id}>{item.title}</Li> : getSubLis(item);
              })}
            </Ul>
          </Phase>
        ))}
      </Phases>
    </Service>
  );
};

export default Page;