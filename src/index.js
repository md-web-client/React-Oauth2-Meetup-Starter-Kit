import React from 'react'
import ReactDom from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { reduxLogic } from './reduxLogic';

// import NestedRoutes from './NestedRoutes'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { App } from './reactLoadable';

import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' ?
  applyMiddleware(thunkMiddleware, createLogger()) :
  applyMiddleware(thunkMiddleware)
)

reduxLogic(store)

ReactDom.render(
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path="/" exact render={(props) => <App /> } />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router >
  </Provider>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
