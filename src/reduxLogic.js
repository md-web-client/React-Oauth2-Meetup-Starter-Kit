import { loadData, saveSession, fetchMeetups } from './actions'
import { parseQs } from './lib/queryString'

export let checkOauth  = (passedProps) => {
    
    const sessionExpiresAt = sessionStorage.getItem('sessionExpiresAt')
    const sessionAccessToken = sessionStorage.getItem('sessionAccessToken')

    if (sessionAccessToken && sessionExpiresAt) {
        console.info('returning visitor - load data')

        passedProps.dispatch(loadData())
        passedProps.dispatch(fetchMeetups(sessionAccessToken, passedProps.history))

    } else {
        console.info('first time visitor', passedProps.history)

        if (window.location.hash.length > 0) {
        console.info('redirect back from meetup &b have fragment')
        const oauthResponse = parseQs(window.location.hash)

        // save data
        console.info('save to session storage and state')
        passedProps.dispatch(saveSession(oauthResponse))
        passedProps.dispatch(fetchMeetups(oauthResponse.access_token, passedProps.history))
        }
    }
}
