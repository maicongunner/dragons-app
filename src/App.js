import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './assets/global/styles';
import Routes from './Routes';
import history from './Services/history';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
