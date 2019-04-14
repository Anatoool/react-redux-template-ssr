import React from 'react';
import PropTypes from 'prop-types';

import './text-input.sass';

export class TextInput extends React.Component {
  static propTypes = {
    type: PropTypes.string, // input type
    label: PropTypes.string, // input top label
    placeholder: PropTypes.string, // input placeholder
    name: PropTypes.string.isRequired, // input name
    className: PropTypes.string, // additional class name
    defaultValue: PropTypes.string,
    helperText: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    className: '',
    defaultValue: '',
    helperText: '',
    error: '',
    disabled: false,
    onChange: () => {},
  };

  renderLabel = (inputId) => {
    const { label } = this.props;
    if (!label) {
      return null;
    }

    return <label htmlFor={inputId}>{label}</label>;
  };

  renderBottomText = () => {
    const { helperText, error } = this.props;

    if (!helperText && !error) {
      return null;
    }

    return <div className="text-input-container__bottom-text">{error || helperText}</div>;
  };

  render() {
    const {
      type,
      name,
      placeholder,
      className,
      error,
      disabled,
      onChange,
      defaultValue,
    } = this.props;

    const finalClassName = `text-input-container ${className} ${error ? '_error' : ''}`;
    const inputId = `text-input-${name}`;

    return (
      <div className={finalClassName}>
        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        { this.renderLabel(inputId) }
        { this.renderBottomText() }
      </div>
    );
  }
}
