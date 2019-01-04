import axios from 'axios'
// import { parseQs } from './lib/queryString'

export const REQUEST_MEETUPS = 'REQUEST_MEETUPS'
export const RECEIVE_MEETUPS = 'RECEIVE_MEETUPS'
export const TO_MEETUP_DETAILS = 'TO_MEETUP_DETAILS'
export const TO_HOME = 'TO_HOME'
export const TO_LOGIN = 'TO_LOGIN'
export const SAVE_SESSION = 'SAVE_SESSION'
export const LOAD_DATA = 'LOAD_DATA'

export function loadData() {
  return { type: LOAD_DATA }
}

export function saveSession(resp) {
  console.info('save session', resp)
  return {
    type: SAVE_SESSION,
    oauthResponse: resp
  }
}

export function shouldRenewToken(state, timeNow) {
  console.info('token will expire in', (state.session.expiresAt - timeNow) / 60, 'minutes')
  return timeNow > state.session.expiresAt ? true : false
}

export function toMeetupDetails(id) {
  return {
    type: TO_MEETUP_DETAILS,
    id: id
  }
}

export function requestMeetups() {
  return { type: REQUEST_MEETUPS }
}

export function receivedMeetups(json) {
  return {
    type: RECEIVE_MEETUPS,
    meetups: json
  }
}

export function fetchMeetups(token, history) {

  return (dispatch, getState) => {
    const timeNow = new Date() / 1000 // in seconds
    if (shouldRenewToken(getState(), timeNow)) {
      console.info('need to renew token')
      history.push('login')
    } else {

      console.info('token still good')
      dispatch(requestMeetups())
      history.push('meetups')

      const config = {
        url: 'https://api.meetup.com/self/events',
        params: {
          page: 20,
          status: 'upcoming',
          access_token: token
        }
      }
      return axios(config)
        .catch(err => {
          // window.location = ''
          history.push('login') // temporary hack to reset app when request fail due to meetup only allowing cors with valid token
        })
        .then(res => {
          return dispatch(receivedMeetups(res.data))
        })
    }

  }
}
