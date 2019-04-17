import React from 'react';
import { hot } from 'react-hot-loader';

import { Root } from 'containers/root';

import './styles/index.sass';

class App extends React.Component {
  render() {
    return (
      <Root {...this.props} />
    );
  }
}

export default hot(module)(App);
