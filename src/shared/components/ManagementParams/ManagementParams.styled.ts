import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  box-shadow: 0px 15px 40px rgba(186, 186, 186, 0.4);
  max-width: 324px;
  flex-shrink: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const ItemTitle = styled.div``;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.gray2};
  margin-left: 8px;
`;

const Amount = styled.div`
  font-weight: bold;
`;

const Img = styled.img``;

export { Wrapper, Line, Item, ItemTitle, Amount, Title, Label, Img };
