import { toHome, toMeetupDetails, loadData, saveSession, fetchMeetups } from './actions'
import { parseQs } from './lib/queryString'

export const reduxLogic  = (store) => {

    const sessionExpiresAt = sessionStorage.getItem('sessionExpiresAt')
    const sessionAccessToken = sessionStorage.getItem('sessionAccessToken')

    if (sessionAccessToken && sessionExpiresAt) {
        console.info('returning visitor - load data')

        store.dispatch(loadData())
        store.dispatch(fetchMeetups(sessionAccessToken))

    } else {
        console.info('first time visitor')

        if (window.location.hash.length > 0) {
        console.info('redirect back from meetup &b have fragment')
        const oauthResponse = parseQs(window.location.hash)

        // save data
        console.info('save to session storage and state')
        store.dispatch(saveSession(oauthResponse))
        store.dispatch(fetchMeetups(oauthResponse.access_token))
        }
    }
}
