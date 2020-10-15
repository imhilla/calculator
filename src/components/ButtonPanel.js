import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

class ButtonPanel extends React.Component {

  render() {
    const { clickHandler } = this.props;
    const array = {
      group1: ['AC', '+/-', '%'],
      group2: ['7', '8', '9'],
      group3: ['4', '5', '6'],
      group4: ['1', '2', '3'],
      group5: ['.'],
    };
    const isTrue = true;

    return (
      <div className="button-container">
        <div className="button-container-div">
          {array.group1.map(item => <Button name={item} key={uuidv4()} handleClick={clickHandler} />)}
          <Button name="÷" color="orange" handleClick={clickHandler} />
        </div>
        <div className="button-container-div">
          {array.group2.map(item => <Button name={item} key={uuidv4()} handleClick={clickHandler} />)}
          <Button name="X" color="orange" handleClick={clickHandler} />
        </div>
        <div className="button-container-div">
          {array.group3.map(item => <Button name={item} key={uuidv4()} handleClick={clickHandler} />)}
          <Button name="-" color="orange" handleClick={clickHandler} />
        </div>
        <div className="button-container-div">
          {array.group4.map(item => <Button name={item} key={uuidv4()} handleClick={clickHandler} />)}
          <Button name="+" color="orange" handleClick={clickHandler} />
        </div>
        <div className="button-container-div">
          <Button name="0" wide={isTrue} handleClick={clickHandler} />
          {array.group5.map(item => <Button name={item} key={uuidv4()} handleClick={clickHandler} />)}
          <Button name="=" color="orange" handleClick={clickHandler} />
        </div>
      </div>
    )
  };
};

export default ButtonPanel;
