import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from 'core/store';
import { Base } from 'layouts';
import { GlobalStyles } from 'shared/styles/global';

import { theme } from './shared/styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
