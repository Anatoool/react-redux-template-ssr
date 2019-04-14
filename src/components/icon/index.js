import React from 'react';
import PropTypes from 'prop-types';

require('./icon.sass');

const GLYPH = {};
GLYPH.LOGO = require('./glyphs/logo.svg').default;

const Icon = ({
  className,
  glyph,
  fill,
  height,
  stroke,
  strokeWidth,
  width,
}) => {
  return (
    <svg
      stroke={stroke}
      strokeWidth={`${strokeWidth}px`}
      height={`${height}`}
      width={`${width}`}
      fill={fill}
      className={`svg-icon ${className}`}
      dangerouslySetInnerHTML={{
        __html: `<use xlink:href="#${glyph.id}"/>`,
      }}
    />
  );
};

Icon.defaultProps = {
  className: null,
  glyph: null,
  fill: '#3b393a',
  height: '20px',
  stroke: null,
  strokeWidth: null,
  width: '20px',
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  glyph: PropTypes.any,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export { Icon, GLYPH };
