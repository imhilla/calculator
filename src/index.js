import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

export const HelloWorld = () => {
  return (
    <div className="hello">
      <h1>Hello World</h1>
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root'),
);

serviceWorker.unregister();
