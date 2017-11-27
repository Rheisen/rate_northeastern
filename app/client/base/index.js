import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import app from '../reducers/reducers';

let store = createStore(app);

ReactDOM.render(
  <Provider store={store}>
    <h2>Rate Northeastern</h2>
  </Provider>,
  document.getElementById('root')
);