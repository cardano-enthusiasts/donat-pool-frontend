import styled from 'styled-components';

import { cardWrapper, h3, h2 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${cardWrapper};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 2fr;
  justify-items: center;
  row-gap: 10px;
  column-gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 700px) {
    max-width: 100%;
    grid-template-columns: min-content 2fr;
  }
`;
const Item = styled.div`
  ${h3};
  margin: 0;
`;
const Title = styled.h3`
  ${h2};
  max-width: 300px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 400px) {
    max-width: 200px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Loader = styled.div<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  ${({ isLoading }) => isLoading && 'padding-top: 10px'}
  ${({ isLoading }) => !isLoading && 'padding-bottom: 27px'}
`;

export { Wrapper, Item, Items, Title, ButtonWrapper, Loader };
