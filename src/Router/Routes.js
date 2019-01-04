import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Meetups } from '../reactLoadable';
import { connect } from 'react-redux'
import { checkOauth } from '../reduxLogic';

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
  constructor(props){
    super(props);
    this.checkOauth = checkOauth
  }

  componentDidMount() {
    this.checkOauth(this.props)
  }

  render() {
    const { meetups, isFetching, history} = this.props
    console.log({history})
    return (
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/login" exact render={(props) => <Login />} />
          <Route path="/meetups" exact render={(props) => <Meetups meetups={meetups} isFetching={isFetching} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
  }
}

export default connect(mapStateToProps)(Routes)
