import React from 'react';
import { TextInput } from 'components';

export const SearchInputsUI = () => (
  <React.Fragment>
    <div className="ui-kit__input-container">
      <TextInput
        name="search-input"
        className="_search"
        placeholder="Placeholder text"
      />
    </div>
  </React.Fragment>
);
