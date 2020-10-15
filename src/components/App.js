import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// eslint-disable-next-line
import Calculate from '../logic/calculate';

const App = () => (
  <div className="main-container">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
