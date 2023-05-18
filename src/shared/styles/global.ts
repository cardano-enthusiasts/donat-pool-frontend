import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    font-size: 16px;
    color: ${theme.colors.black};
  }

  body {
    background-color: white;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 2500px;

    main {
      flex: 1 0 auto;
    }

    footer {
      flex: 0 0 auto;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
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

export { GlobalStyles };
