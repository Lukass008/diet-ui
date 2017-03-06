import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const loginSuccess = createAction('DIET/AUTH/LOGIN/SUCCESS')
export const loginError = createAction('DIET/AUTH/LOGIN/ERROR')
export const logoutUser = createAction('DIET/AUTH/LOGOUT')

const initialState = Map({})

// REDUCER
export default handleActions({
  [loginSuccess().type]: (state, action) => {
    const { user, accessToken } = action.payload.auth
    return state
      .set('user', user)
      .set('accessToken', accessToken)
  },
  [loginError().type]: (state, action) => {
    return state.set('error', action.payload)
  },
  [logoutUser().type]: () => {
    return Map({})
  }
}, initialState)
