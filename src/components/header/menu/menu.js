import React from 'react';
import { NavLink } from 'react-router-dom';
import { CLIENT_PAGES } from 'common';
import { Button } from 'components';

import './menu.sass';

export class HeaderMenu extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    showMenu: false,
  };

  menu = React.createRef();

  menuButton = React.createRef();

  outsideClickListener = (e) => {
    if (!this.menu.current.contains(e.target) && !this.menuButton.current.contains(e.target)) {
      this.toggleMenu();
    }
  };

  toggleMenu = () => {
    if (this.state.showMenu) {
      this.setState({ showMenu: false });
      window.document.removeEventListener('touchstart', this.outsideClickListener, false);
      window.document.removeEventListener('mousedown', this.outsideClickListener, false);
    } else {
      this.setState({ showMenu: true });
      window.document.addEventListener('touchstart', this.outsideClickListener, false);
      window.document.addEventListener('mousedown', this.outsideClickListener, false);
    }
  };

  render() {
    const openClass = this.state.showMenu ? '_opened' : '';

    return (
      <div className="header-menu">
        <div ref={this.menuButton}>
          <Button
            className="_simple"
            clickAreaSize={0}
            action={this.toggleMenu}
          >
            <i className="material-icons md-18">
              more_horiz
            </i>
          </Button>
        </div>
        <ul ref={this.menu} className={`header-menu__list ${openClass}`}>
          <li className="header-menu__list-item">
            <NavLink
              to={CLIENT_PAGES.UI_KIT}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              UI kit
            </NavLink>
          </li>
          <li className="header-menu__list-item">
            <NavLink
              to={CLIENT_PAGES.IDEAS}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              Ideas
            </NavLink>
          </li>
          <li className="header-menu__list-item">
            <NavLink
              to={CLIENT_PAGES.ABOUT}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="header-menu__list-item">
            <NavLink
              to={CLIENT_PAGES.PRIVACY}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              Privacy
            </NavLink>
          </li>
          <li className="header-menu__list-item">
            <NavLink
              to={CLIENT_PAGES.TERMS}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              Terms
            </NavLink>
          </li>
          <li className="header-menu__list-item d-only-on-mobile">
            <NavLink
              to={CLIENT_PAGES.LICENSE}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              License
            </NavLink>
          </li>
          <li className="header-menu__list-item d-only-on-mobile">
            <NavLink
              to={CLIENT_PAGES.LICENSE}
              className="header-menu__list-link"
              activeClassName="_active"
              onClick={this.toggleMenu}
            >
              Join / Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
