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
    this.state = { total: null, next: null, operation: null, result: '' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (evt) => {
    const buttonName = evt.target.innerText;
    this.setState((prevState) => {
      Calculate.calculate(prevState, buttonName)
      var result = prevState
      // console.log(result)
      return {
        total: result.total,
        next: result.next,
        operation: result.operation,
        result: buttonName === '=' ? result.total : result.next,
      };
    });
  }
  render() {
    const result = this.state.result
    const myTotal = this.state.total
    return (
      <div className="main-container">
        <Display result={result === '' ? '0' : result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
};

export default App;
