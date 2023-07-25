import HTMLReactParser from 'html-react-parser';

import { Service } from 'layouts';
import { roadmapText } from 'shared/constants';

import {
  ColorTitle,
  Li,
  Phase,
  PhaseTitle,
  Phases,
  SubLi,
  Title,
  Ul,
} from './RoadmapForReading.styled';

const RoadmapForReading = () => {
  const getSubLis = (item) => {
    return item.subItems.map(({ id, title }) => (
      <SubLi key={id}>{title}</SubLi>
    ));
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
                return item.title ? (
                  <Li key={item.id}>{item.title}</Li>
                ) : (
                  getSubLis(item)
                );
              })}
            </Ul>
          </Phase>
        ))}
      </Phases>
    </Service>
  );
};

export default RoadmapForReading;
