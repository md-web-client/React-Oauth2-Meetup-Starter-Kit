import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { App } from '../reactLoadable';

class NestedRouting extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/App`} component={App} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  console.info(state);
  return {
    meetups: state.meetups,
    meetup: state.meetup,
    route: state.route,
    session: state.session,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps)(NestedRouting);
