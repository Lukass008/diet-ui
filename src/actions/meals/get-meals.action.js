// ACTIONS
import { getMealsBegin, getMealsEnd } from '../../ducks/meals.duck'
import { logoutAction } from '../auth/logout-user.action'
// LOGIC
import getMeals from '../../logic/meals/get-meals'
// SELECTORS
import { getAccessToken } from '../../selectors/auth.selectors'

export function getMealsAction () {
  return function (dispatch, getState) {
    const state = getState()
    const token = getAccessToken(state)

    dispatch(getMealsBegin())

    getMeals(token)
      .then((data) => {
        dispatch(getMealsEnd(data.data.meals))
      })
      .catch((err) => {
        if (err.status === 403) {
          dispatch(logoutAction())
        }
        dispatch(getMealsEnd(err))
      })
  }
}
