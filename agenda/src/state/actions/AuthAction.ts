import {LOGIN_ENDPOINT, REGISTRER_ENDPOINT} from '../endpoints'
import {INIT_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTRER_FAILURE, REGISTRER_INIT, REGISTRER_SUCCESS} from '../types'

const loginAction =  (username: string, password: string) => {
    return (dispatch) => {
        dispatch({type: INIT_LOGIN})

        fetch(LOGIN_ENDPOINT, {body: JSON.stringify({username, password}), method: 'POST'})
        .then(response => response.json())
        .then(data => {
            dispatch({type: LOGIN_SUCCESS, payload: data})
        })
        .catch(error => {
            dispatch({type: LOGIN_FAILURE, payload: error})
        })
    }
}

export {loginAction}

const registrerAction = (username: string, password: string) => {
    return (dispatch) =>{
        dispatch({type: REGISTRER_INIT})
        fetch(REGISTRER_ENDPOINT, {body: JSON.stringify({username,password}),method:'POST'})
        .then(response => response.json())
        .then(data => {
            dispatch({type: REGISTRER_SUCCESS, payload: data})
        })
        .catch(error => {
            dispatch({type: REGISTRER_FAILURE, payload: error})
        })
    }
}
export {registrerAction}