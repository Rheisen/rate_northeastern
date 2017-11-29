import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/home/home.js';
import Search from '../pages/search/search.js';
import NotFound from '../pages/not_found/not_found.js';
import SignUp from '../pages/sign_up/sign_up.js';
import SignIn from '../pages/sign_in/sign_in.js';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={"/"} component={ Home } />
        <Route path={"/search"} component={ Search } />
        <Route path={"/sign-up"} component={ SignUp } />
        <Route path={"/sign-in"} component={ SignIn } />
        <Route path={"*"} component={ NotFound } />
      </Switch>
    </Router>
  </Provider>
);

export default App;
