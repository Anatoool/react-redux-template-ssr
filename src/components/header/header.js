import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon, GLYPH,
} from 'components';
import { CLIENT_PAGES } from 'common';
import { SearchForm } from './search-form/searchForm';
import { HeaderMenu } from './menu/menu';

import './header.sass';

export class Header extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <header className="header">

        <div className="header__left-container">
          <Link to={CLIENT_PAGES.HOME} className="header__logo">
            <Icon glyph={GLYPH.LOGO} width="30px" height="30px" />
            <div className="header__logo-title control d-none-on-mobile">
              React
            </div>
          </Link>
          <div className="header__search">
            <SearchForm />
          </div>
        </div>

        <div className="header__right-container">
          <div className="header__right-container-item d-none-on-mobile">
            <Link to={CLIENT_PAGES.LICENSE} className="btn _simple">
              License
            </Link>
          </div>
          <div className="header__right-container-item">
            <HeaderMenu />
          </div>
          <div className="header__right-container-item d-none-on-mobile">
            <Link to={CLIENT_PAGES.HOME} className="btn _simple">
              Join / Sign In
            </Link>
          </div>
        </div>

        <div className="header__shadow" />

      </header>
    );
  }
}
