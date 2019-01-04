import React from 'react'
import moment from 'moment'

const MeetupDetails = ({meetup, onBack}) => {

  let mapLink = ''
  let venueName = 'N/A'
  let venueAddress = ''
  if (meetup.venue) {
    mapLink = 'http://www.google.com/maps/place/' + meetup.venue.lat + ',' + meetup.venue.lon
    venueName = meetup.venue.name
    venueAddress = meetup.venue.address_1 + ' ' + meetup.venue.city
  }

  return <div>
        {meetup.name} 
  </div>
}

export default MeetupDetails