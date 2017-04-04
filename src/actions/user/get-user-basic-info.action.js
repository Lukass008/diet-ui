import { getUserBasicInfo } from '../../logic/user/get-user-basic-info'
import { getUserBasicInfoBegin, getUserBasicInfoEnd } from '../../ducks/user.duck'
import { getAccessToken } from '../../selectors/auth.selectors'

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
        throw error
      })
  }
}
