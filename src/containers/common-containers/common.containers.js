import React from 'react';
import { Route } from 'react-router-dom';
import { CLIENT_PAGES } from 'common';

import { HomeContainer } from './home/home.container';
import { AboutContainer } from './about/about.container';
import {IdeasContainer} from './ideas/ideas.container';
import { LicenseContainer } from './license/license.container';
import { PrivacyContainer } from './privacy/privacy.container';
import { SearchContainer } from './search/search.container';
import { TermsContainer } from './terms/terms.container';

import { UIKitContainer } from './ui-kit/ui.kit.container';
export class CommonContainers extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path={CLIENT_PAGES.HOME} component={HomeContainer} />
        <Route exact path={CLIENT_PAGES.ABOUT} component={AboutContainer} />
        <Route exact path={CLIENT_PAGES.IDEAS} component={IdeasContainer} />
        <Route exact path={CLIENT_PAGES.LICENSE} component={LicenseContainer} />
        <Route exact path={CLIENT_PAGES.PRIVACY} component={PrivacyContainer} />
        <Route exact path={CLIENT_PAGES.SEARCH} component={SearchContainer} />
        <Route exact path={CLIENT_PAGES.TERMS} component={TermsContainer} />

        <Route exact path={CLIENT_PAGES.UI_KIT} component={UIKitContainer} />
      </React.Fragment>
    );
  }
}
