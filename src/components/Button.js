import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button className="button-button" type="button">{props.name}</button>; // eslint-disable-line

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'claculator',
  color: 'orange',
  wide: "",
};

export default Button;
