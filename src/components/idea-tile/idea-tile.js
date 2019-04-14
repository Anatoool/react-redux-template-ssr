import React from 'react';
import PropTypes from 'prop-types';

import './idea-tile.sass';

export class IdeaTile extends React.PureComponent {
  static propTypes = {
    idea: PropTypes.object,
  };

  static defaultProps = {
    idea: {},
  };

  render() {
    const {
      idea
    } = this.props;
    const { title = '', description = '' } = idea;

    return (
      <div className="idea-tile">
        <div className="idea-tile__title">
          {title}
        </div>
        <div className="idea-tile__description">
          {description}
        </div>
      </div>
    );
  }
}