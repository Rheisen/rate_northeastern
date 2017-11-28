import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './routes.js';
import appState from '../reducers/reducers';

import './base.scss';

let store = createStore(appState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);