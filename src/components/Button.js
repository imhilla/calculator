import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const widthC = {
    fifty: '50%',
    half: '25%',
  };
  let widthB;
  /* eslint-disable */
  if (props.wide === true) {
    widthB = widthC.fifty;
  } else {
    widthB = widthC.half;
  }
  return (
    <button className="button-button" style={{ backgroundColor: props.color, width: widthB }} type="button">
      {props.name}
    </button>
  );
};
/* eslint-enable */
Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: 'claculator',
  wide: '',
  color: 'gray',
};

export default Button;
