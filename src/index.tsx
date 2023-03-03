import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from 'core/store';
import HomePage from 'pages/HomePage';
import ManagementPage from 'pages/ManagementPage';
import ProfilePage from 'pages/ProfilePage';
import { GlobalStyles } from 'shared/styles/global';

import { theme } from './shared/styles/theme';

declare global {
  interface Window {
    offchain: any;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'management',
    element: <ManagementPage />,
  },
  {
    path: 'my-profile',
    element: <ProfilePage />,
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Provider>
  </ThemeProvider>
);
