import styled from 'styled-components';

const Items = styled.div`
  margin-top: 60px;
`;

const Item = styled.div`
  margin-bottom: 86px;
  @media (max-width: 700px) {
    margin-bottom: 40px;
  }
`;

const Order = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 24px;
`;

const Gif = styled.img`
  border-radius: 6px;
  border: 12px solid ${({ theme }) => theme.colors.yellow};
  box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.red};
  max-width: 650px;
  max-height: 360px;
`;

const GifAndDescription = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const Description = styled.ul`
  margin: 0;
  padding-left: 20px;

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const DescriptionItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
`;

export {
  Items,
  Item,
  Order,
  Title,
  Gif,
  GifAndDescription,
  Description,
  DescriptionItem,
};