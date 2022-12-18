import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyle from './style/GlobalStyle';
import { SplashProvider } from './contexts/splash';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SplashProvider>
        <App />
      </SplashProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
