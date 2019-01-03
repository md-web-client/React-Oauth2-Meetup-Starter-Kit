import React from 'react'
import { toQs } from '../lib/queryString'

export default class Login extends React.Component {
  render() {
    const MEETUP_CLIENT_ID = 'niqkagsfu07kb2coik832vljhm'; // this one is for local dev.
    const MEETUP_REDIRECT_URI = window.location.href;

    const params = {
      client_id: MEETUP_CLIENT_ID,
      response_type: 'token',
      redirect_uri: MEETUP_REDIRECT_URI
    }

    const url = 'https://secure.meetup.com/oauth2/authorize' + toQs(params)

    const Comp = () => <div className="ph3">
      <a href={url}>Button Text</a>
    </div>

    console.log('props', this.props, 'props')
    return <div>
      <Comp/>
    </div>
  }

}
