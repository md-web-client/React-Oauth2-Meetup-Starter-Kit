import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { App, Login, Meetups } from '../reactLoadable';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  console.info(state)
  return {
    meetups: state.meetups,
    meetup: state.meetup,
    route: state.route,
    session: state.session,
    isFetching: state.isFetching
  }
}

class Routes extends Component {

  render() {
    const { meetups, meetup, route, isFetching } = this.props
    console.log('hi', { meetups, meetup, route, isFetching })
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <App /> } />
          <Route path="/login" exact render={(props) => <Login />} />
          <Route path="/meetups" exact render={(props) => <Meetups meetups={meetups} isFetching={isFetching} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(Routes)
