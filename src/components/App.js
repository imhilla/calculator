/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import Calculate from '../logic/calculate';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { total: null, next: null, operation: null }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    // this.setState(Calculate.calculate(this.state, buttonName));
    console.log('yes')
  }
  render() {

    return (
      <div className="main-container">
        <Display result={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
};

export default App;
