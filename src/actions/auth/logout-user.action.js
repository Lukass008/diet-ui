import { logoutUser } from '../../ducks/auth.duck'
import { browserHistory } from 'react-router'

export function logoutAction () {
  return (dispatch, getState) => {
    dispatch(logoutUser())
    window.localStorage.removeItem('diet-api')
    browserHistory.push('/login')
  }
}