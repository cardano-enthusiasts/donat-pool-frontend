import styled from 'styled-components';

import { cardWrapper, h2 } from 'shared/styles/mixins';

const Wrapper = styled.div``;

const Title = styled.h2`
  ${h2}
`;

const Form = styled.div`
  ${cardWrapper};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemTitle = styled.div``;

export { Wrapper, Title, Form, Line, ItemTitle };
