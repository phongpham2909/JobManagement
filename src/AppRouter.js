import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn_Up from './admin/SignIn_Up';


class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route key={1} exact path="/admin" component={SignIn_Up} />
          </Switch>
        </Router>
    );
  }
}

export default AppRouter;