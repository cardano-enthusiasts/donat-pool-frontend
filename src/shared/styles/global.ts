import { createGlobalStyle } from 'styled-components';

import fonts from 'shared/styles/fonts.module.css';

const GlobalStyles = createGlobalStyle<{ neutral }>`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    font-family: Montserrat, 'Open Sans', sans-serif;
    font-size: 16px;
  }

  body {
    background-color:${({ neutral }) => neutral};
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;

    main {
      flex: 1 0 auto;
    }

    footer {
      flex: 0 0 auto;
    }
  }

  a {
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

const Fonts = createGlobalStyle`
  ${fonts}
`;

export { GlobalStyles, Fonts };
