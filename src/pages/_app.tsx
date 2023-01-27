import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { Fonts, GlobalStyles } from 'shared/styles/global';
import theme from 'shared/styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
