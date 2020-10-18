import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

const HelloWorld = () => (
  <div className="container">
    <App />
  </div>
);

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root'),
);

serviceWorker.unregister();
