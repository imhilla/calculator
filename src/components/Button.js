import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <h1>{props.name}</h1>; // eslint-disable-line

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'claculator',
};

export default Button;
