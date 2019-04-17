import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from 'store';
import { Provider } from 'react-redux';
import App from './app';

let initialState = {};
if (window && window.REDUX_STATE) {
  initialState = window.REDUX_STATE;
  delete window.REDUX_STATE;
}

const store = configureStore(initialState);

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
