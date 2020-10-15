import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color, handleClick } = props;
  const widthC = {
    fifty: '50%',
    half: '25%',
  };
  let widthB;

  if (wide === true) {
    widthB = widthC.fifty;
  } else {
    widthB = widthC.half;
  }
  return (
    <button className="button-button" style={{ backgroundColor: color, width: widthB }} type="button" onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: 'claculator',
  wide: false,
  color: 'gray',
};

export default Button;
