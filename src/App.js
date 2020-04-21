import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './Config/ReactotronConfig';

import GlobalStyle from './Styles/global.js';
import Router from './Router';
import Header from './Components/Header';

import history from './Services/history';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
