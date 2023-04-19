import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global-style';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import ScrollToTop from './components/ui/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
