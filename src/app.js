import React from 'react';
import { hot } from 'react-hot-loader';
import { configureStore } from 'store';
import { Provider } from 'react-redux';
import { Root } from 'containers/root';

import './styles/index.sass';

let initialState = {};
// if (window) {
//   initialState = window.REDUX_STATE;
//   delete window.REDUX_STATE;
// }

const store = configureStore(initialState);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = store;
  }

  render() {
    const { store } = this;
    return (
      <Provider store={store}>
        <Root {...this.props} />
      </Provider>
    );
  }
}

export default hot(module)(App);
