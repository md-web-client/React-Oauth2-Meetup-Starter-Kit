import React, {Component} from 'react'

import moment from 'moment'

class Meetups extends Component {
  render(){
    const { meetups, onSelect, isFetching } = this.props

    const content = meetups.map((meetup, index) => {
      return <div key={index}>
        <button  style={{width:'100%'}} onClick={(event) => onSelect(event, meetup.id)}>
          <div style={{textAlign:'left'}}>{meetup.name}</div>
          <div style={{textAlign:'left'}}>{moment(meetup.time).fromNow()}</div>
        </button>
      </div>
    })

    return <div style={{textAlign:'center'}}>
      <div>Listed below are the upcoming meetups!</div>
      {isFetching ? <div>"loading..."</div> : content}
    </div>
    }
}

export default Meetups


