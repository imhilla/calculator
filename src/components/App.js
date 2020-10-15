import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import Calculate from '../logic/calculate'

const App = () => (
  <div className="main-container">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
