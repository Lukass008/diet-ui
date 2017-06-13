import {logInUser} from '../../logic/auth/login-user'
import {loginSuccess, loginError} from '../../ducks/auth.duck'
import { browserHistory } from 'react-router'
import { getUserBasicInfoAction } from '../../actions/user/get-user-basic-info.action'

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
          dispatch(getUserBasicInfoAction())
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
