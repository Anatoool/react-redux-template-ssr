import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router-dom';
import { Header } from 'components';
import { CommonContainers } from './common-containers/common.containers';

import './root-container.sass';

@withRouter
export class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  static defaultProps = {
    history: {},
    location: {},
  };

  componentDidMount() {
    const { history, location: oldLocation } = this.props;
    history.listen((location, action) => this.historyChange(oldLocation, location, action));
  }

  historyChange = (oldLocation, newLocation, /* action */) => {
    if (oldLocation.pathname !== newLocation.pathname) {
      // eslint-disable-next-line
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <div className="root-container">
        <Header />

        <div className="root-container__content">
          <Switch>
            <CommonContainers />
          </Switch>
        </div>

      </div>
    );
  }
}
