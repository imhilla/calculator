import React from 'react';
import PropTypes from 'prop-types';

const Display = props => <div className="display-container"><h1>{props.result}</h1></div>; // eslint-disable-line

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
