import {INIT_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTRER_FAILURE, REGISTRER_INIT, REGISTRER_SUCCESS} from '../types'

const initialState = {
    loading: false,
    error: false,
    isAuthenticated: false,
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_LOGIN:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, loading: false, isAuthenticated: true}
        case LOGIN_FAILURE:
            return {...state, loading: false, error: true}
        default:
            return state
    }
}

export const AuthReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRER_INIT:
            return {...state, loading: true}
        case REGISTRER_SUCCESS:
            return {...state, loading: false, isAuthenticated: true}
        case REGISTRER_FAILURE:
            return {...state, loading: false, error: true}
        default:
            return state
    }
}