import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './Animation.css';
import Promise from 'promise-polyfill';


// for IE 8
if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
