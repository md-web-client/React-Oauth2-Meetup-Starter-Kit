import React, {Component} from 'react'

import moment from 'moment'


class Meetups extends Component {
  render(){
    const { meetups, isFetching } = this.props
    console.log('boooooooooo', this.props)

    const content = meetups.map((meetup, index) => {
      return <div key={index}>
        <button  >
          <div>{meetup.name}</div>
          <div>{moment(meetup.time).fromNow()}</div>
        </button>
      </div>
    })

    return <div>
      <div>Upcoming</div>
      {isFetching ? <div>"loading..."</div> : content}
    </div>
    }
}

export default Meetups


