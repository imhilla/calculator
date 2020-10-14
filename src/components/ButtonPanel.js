import React from 'react';
import Button from './Button'

const ButtonPanel = () => (
  <div className="button-container">
    <div className="button-container-div">
      <Button type="button" className="button-button" name='AC'></Button>
      <Button type="button" className="button-button" name="+/-"></Button>
      <Button type="button" className="button-button" name="%"></Button>
      <Button type="button" className="button-button" name="÷"></Button>
    </div>
    <div className="button-container-div">
      <Button type="button" className="button-button" name="7"></Button>
      <Button type="button" className="button-button" name="8"></Button>
      <Button type="button" className="button-button" name="9"></Button>
      <Button type="button" className="button-button" name="X"></Button>
    </div>
    <div className="button-container-div">
      <Button type="button" className="button-button" name="4"></Button>
      <Button type="button" className="button-button" name="5"></Button>
      <Button type="button" className="button-button" name="6"></Button>
      <Button type="button" className="button-button" name="-"></Button>
    </div>
    <div className="button-container-div">
      <Button type="button" className="button-button" name="1"></Button>
      <Button type="button" className="button-button" name="2"></Button>
      <Button type="button" className="button-button" name="3"></Button>
      <Button type="button" className="button-button" name="+"></Button>
    </div>
    <div className="button-container-div">
      <Button type="button" className="button-button-lg" name="0"></Button>
      <Button type="button" className="button-button" name="."></Button>
      <Button type="button" className="button-button" name="="></Button>
    </div>
  </div>
);

export default ButtonPanel;
