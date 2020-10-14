import React from 'react';
import PropTypes from 'prop-types';

const Button = () => (
  <div>
    <h1>{this.props.name}</h1>
  </div>
)

Button.propTypes = {
  name: PropTypes.string
}

export default Button;