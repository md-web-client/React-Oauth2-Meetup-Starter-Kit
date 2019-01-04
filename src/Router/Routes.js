import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Meetups, MeetupDetails, RsvpComponent } from '../reactLoadable';
import { connect } from 'react-redux'
import { checkOauth } from '../reduxLogic';
import { toMeetupDetails } from '../actions';

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
    this.show = this.show.bind(this)
  }

  show(event, id) {
    console.log('reached')
    event.preventDefault() // workaround for ghostclick https://github.com/callemall/material-ui/issues/5070 
    this.props.dispatch(toMeetupDetails(id))
    this.props.history.push('meetupdetails')
  }

  componentDidMount() {
    this.checkOauth(this.props)
  }

  render() {
    const { meetups, meetup, isFetching, history} = this.props
    console.log({history})
    return (
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/login" exact render={(props) => <Login />} />
          <Route path="/meetups" exact render={(props) => <Meetups meetups={meetups} onSelect={this.show} isFetching={isFetching} />} />
          <Route path="/meetupdetails" exact render={(props) => <MeetupDetails meetup={meetup} onBack={this.home} />} />
          <Route path="/rsvp" exact render={(props) => <RsvpComponent />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
  }
}

export default connect(mapStateToProps)(Routes)
