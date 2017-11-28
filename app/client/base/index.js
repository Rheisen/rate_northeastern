import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import app from '../reducers/reducers';
import Home from '../pages/home/home.js';

import './base.scss';

let store = createStore(app);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);