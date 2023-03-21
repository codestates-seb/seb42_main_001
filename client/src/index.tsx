import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global-style';
import axios from 'axios';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common['Authorization'] =
  localStorage.getItem('accessToken');
axios.defaults.headers.common['Refresh'] = localStorage.getItem('refreshToken');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
