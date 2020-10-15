import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// eslint-disable-next-line
import Calculate from '../logic/calculate';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { total: null, next: null, operation: null }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {

  }
  render() {

    return (
      <div className="main-container">
        <Display />
        <ButtonPanel />
      </div>
    )
  }
};

export default App;
