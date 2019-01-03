import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { App } from '../reactLoadable';

class Routes extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" exact render={(props) => <App /> } />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router >
    )
  }
}

export default Routes
