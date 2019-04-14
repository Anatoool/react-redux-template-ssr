import React from 'react';
import PropTypes from 'prop-types';

import './loader.sass';

export class Loader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    isShow: PropTypes.bool,
    noTransparent: PropTypes.bool,
    smallLoader: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    isShow: false,
    noTransparent: false,
    smallLoader: false,
    className: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShow) {
      this.loader.focus();
    }
  }

  render() {
    const {
      isShow, noTransparent,
      smallLoader, className,
    } = this.props;
    let IE = false;

    /* eslint-disable */
    if (global.IS_BROWSER && navigator) {
      if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
        IE = true;
      }
    }
    /* eslint-enable */

    return (
      <div
        className={`loader ${className} ${isShow  ? '_show' : ''} ${
          noTransparent ? '_no-transparent' : ''
          }`}
        ref={loader => (this.loader = loader)}
      >
        {isShow && (
          <div className={`loader__spinner ${smallLoader ? '_small' : ''}`}>
            <img
              className={`loader__img ${IE ? 'loader__rotate' : ''}`}
              src="/assets/loader.svg"
              alt="loader"
            />
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
