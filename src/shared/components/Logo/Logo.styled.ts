import styled from 'styled-components';

const LogoWrapper = styled.div`
  a,
  img {
    @media (max-width: 450px) {
      display: block;
      max-width: 200px;
    }
  }
`;

export { LogoWrapper };
