import React from 'react';
import { TextInputsUI } from './form-elements/text-inputs';
import { SearchInputsUI } from './form-elements/search-inputs';
import { ButtonsUI } from './simple-components/buttons';

import './ui-kit.sass';

export class UIKitContainer extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className="ui-kit">
        <h1>
          UI-Kit
        </h1>

        <div className="ui-kit__block">
          <h3>
            Text inputs
          </h3>
          <TextInputsUI />
        </div>

        <div className="ui-kit__block">
          <h3>
            Search input
          </h3>
          <SearchInputsUI />
        </div>

        <div className="ui-kit__block">
          <h3>
            Buttons
          </h3>
          <ButtonsUI />
        </div>

      </div>
    );
  }
}
