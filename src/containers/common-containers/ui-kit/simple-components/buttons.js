import React from 'react';
import { Button } from 'components';

export const ButtonsUI = () => (
  <React.Fragment>
    <div className="ui-kit__button-container">
      <Button
        type="button"
        className="_primary"
        action={() => console.log('click')}
      >
        Primary
      </Button>
    </div>

    <div className="ui-kit__button-container">
      <Button
        type="button"
        className="_primary"
        disabled
      >
        Primary
      </Button>
    </div>

    <div className="ui-kit__button-container">
      <Button
        type="button"
        className="_outline"
        action={() => console.log('click')}
      >
        Label
      </Button>
    </div>

    <div className="ui-kit__button-container">
      <Button
        type="button"
        className="_outline"
        disabled
      >
        Label
      </Button>
    </div>

    <div className="ui-kit__button-container">
      <Button
        type="button"
        className="_search"
        action={() => console.log('click')}
        clickAreaSize={40}
      >
        <i className="material-icons md-18">
          search
        </i>
        <span>Search</span>
      </Button>
    </div>
  </React.Fragment>
);
