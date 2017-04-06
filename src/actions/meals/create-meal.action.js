// DUCKS
import { createMealBegin, createMealEnd } from '../../ducks/create-meal.duck'
// ACTIONS
import { logoutAction } from '../../actions/auth/logout-user.action'
// LOGIC
import { createMeal } from '../../logic/meals/create-meal'
// SELECTORS
import { getAccessToken } from '../../selectors/auth.selectors'

export function createMealAction () {
  return function (dispatch, getState) {
    const state = getState()
    const token = getAccessToken(state)

    dispatch(createMealBegin())
    createMeal(token)
      .then((data) => {
        dispatch(createMealEnd(data))
      })
      .catch((err) => {
        if (err.status === 403) {
          dispatch(logoutAction())
        }
        dispatch(createMealEnd(err))
      })
  }
}
