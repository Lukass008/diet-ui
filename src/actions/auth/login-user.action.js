import {logInUser} from '../../logic/auth/login-user'
import {loginSuccess, loginError} from '../../ducks/auth.duck'
import { browserHistory } from 'react-router'

export function loginAction (user) {
  return function (dispatch, getState) {
    // const state = getState()

    logInUser(user)
      .then((res) => {
        if (res.token && res.token.length) {
          const storeObj = {
            auth: {
              user: res.user,
              accessToken: res.token
            }
          }
          window.localStorage.setItem('diet-api', JSON.stringify(storeObj))
          dispatch(loginSuccess(storeObj))
          browserHistory.push('/')
        } else {
          dispatch(loginError(res))
        }
      })
      .catch((error) => {
        throw error
      })
  }
}
