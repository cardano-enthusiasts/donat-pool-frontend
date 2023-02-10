import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat-bold.woff2') format('woff2'),
      url('fonts/montserrat-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('fonts/montserrat-regular.woff2') format('woff2'),
      url('fonts/montserrat-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/open-sans-bold.woff2') format('woff2'),
      url('fonts/open-sans-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/open-sans-regular.woff2') format('woff2'),
      url('fonts/open-sans-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

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
    background-color: white;
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

export { GlobalStyles };
