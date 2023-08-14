import HTMLReactParser from 'html-react-parser';
import { useState } from 'react';

import { data } from './data';
import { Description, DescriptionItem, Gif, GifAndDescription, Item, Items, Order, Title } from './Tutorial.styled';
import { Button } from '..';

const Tutorial = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id="tutorial">
      <Button
        themeType="dashed"
        primaryColor="blue"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isClickedTheme={isOpen}
      >
        Watch the tutorial
      </Button>
      {isOpen && (
        <Items>
          {data.map(({ order, title, src, description }) => {
            return (
              <Item key={order}>
                <Order>{order}</Order>
                <Title>{title}</Title>
                <GifAndDescription>
                  <Gif src={`/gif/${src}`} alt="tutorial step" />
                  <Description>
                    {description.map((item, index) => (
                      <DescriptionItem key={index}>{HTMLReactParser(item)}</DescriptionItem>
                    ))}
                  </Description>
                </GifAndDescription>
              </Item>
            );
          })}
        </Items>
      )}
    </div>
  );
};

export { Tutorial };
