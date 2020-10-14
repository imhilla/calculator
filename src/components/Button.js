import React from 'react';
import PropTypes from 'prop-types';

props = {
  name: "",
}
const Button = name => <div><h1>{name = { name }}</h1></div>;

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'claculator',
};

export default Button;
