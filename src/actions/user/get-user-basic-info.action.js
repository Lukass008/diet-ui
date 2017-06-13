import { getUserBasicInfo } from '../../logic/user/get-user-basic-info'
import { getUserBasicInfoBegin, getUserBasicInfoEnd } from '../../ducks/user.duck'
import { getAccessToken } from '../../selectors/auth.selectors'
import { logoutAction } from '../auth/logout-user.action'

export function getUserBasicInfoAction () {
  return function (dispatch, getState) {
    const state = getState()
    const token = getAccessToken(state)

    dispatch(getUserBasicInfoBegin())
    getUserBasicInfo(token)
      .then((res) => {
        dispatch(getUserBasicInfoEnd(res.data.getUserInfo))
      })
      .catch((error) => {
        if (error.status === 403) {
          dispatch(logoutAction())
        }
        dispatch(getUserBasicInfoEnd(error))
      })
  }
}
