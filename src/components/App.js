import React, {Component} from 'react'
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

class App extends Component {
  render() {
    return <div>
      hi
    </div>
  }
}

export default connect(mapStateToProps)(App)
