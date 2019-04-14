import React from 'react';
import { TextInput } from 'components';

export const TextInputsUI = () => (
  <React.Fragment>
    <div className="ui-kit__input-container">
      <TextInput
        name="text-input1"
        placeholder="Placeholder"
      />
    </div>


    <div className="ui-kit__input-container">
      <TextInput
        name="text-input2"
        label="Label example"
      />
    </div>


    <div className="ui-kit__input-container">
      <TextInput
        name="text-input3"
        helperText="Helper Text"
      />
    </div>

    <div className="ui-kit__input-container">
      <TextInput
        name="text-input4"
        helperText="Helper Text"
        label="Label"
        error="Error text!"
      />
    </div>

    <div className="ui-kit__input-container">
      <TextInput
        name="text-input5"
        label="Disabled"
        disabled
      />
    </div>
  </React.Fragment>
);
