import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <div>
    <h1>{props.name}</h1>
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
}

Button.defaultProps = {
  name: 'claculator',
}

export default Button;
