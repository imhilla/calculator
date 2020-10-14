import React from 'react';
import Button from './Button'

const ButtonPanel = () => {
  let array = {
    group1: ['AC', '+/-', '%'],
    group2: ['7', '8', '9'],
    group3: ['4', '5', '6'],
    group4: ['1', '2', '3'],
    group5: ['.'],
  };

  return (
    <div className="button-container">
      <div className="button-container-div">
        {array.group1.map((item, i) => <Button name={item} />)}
        <Button name="÷" color="orange" />
      </div>
      <div className="button-container-div">
        {array.group2.map((item, i) => <Button name={item} />)}
        <Button name="X" color="orange" />
      </div>
      <div className="button-container-div">
        {array.group3.map((item, i) => <Button name={item} />)}
        <Button name="-" color="orange" />
      </div>
      <div className="button-container-div">
        {array.group4.map((item, i) => <Button name={item} />)}
        <Button name="+" color="orange" />
      </div>
      <div className="button-container-div">
        <Button name="0" wide={true} />
        {array.group5.map((item, i) => <Button name={item} />)}
        <Button name="=" color="orange" />
      </div>
    </div>
  );
};

export default ButtonPanel;
