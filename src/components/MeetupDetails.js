import React from 'react'

const MeetupDetails = ({meetup}) => {
  console.log({meetup})


  return <div>
      { meetup.created}
      <br/>{ meetup.description}
      <br/>{ meetup.duration}
      <br/>{ meetup.group.created}
      <br/>{ meetup.group.name}
      <br/>{ meetup.group.id}
      <br/>{ meetup.group.join_mode}
      <br/>{ meetup.group.lat}
      <br/>{ meetup.id}
      <br/>{ meetup.link}
      <br/>{ meetup.local_date}
      <br/>{ meetup.local_time}
      <br/>{ meetup.name}
      <br/>{ meetup.status}
      <br/>{ meetup.time}
      <br/>{ meetup.updated}
      <br/>{ meetup.utc_offset}
      <br/>{ meetup.venue.id}
      <br/>{ meetup.venue.name}
      <br/>{ meetup.venue.lat}
      <br/>{ meetup.venue.lon}
      <br/>{ meetup.venue.repinned}
      <br/>{ meetup.visibility}
      <br/>{ meetup.waitlist_count}
      <br/>{ meetup.yes_rsvp_count}
  </div>
}

export default MeetupDetails
