// DUCKS
import { createMealBegin, createMealEnd } from '../../../ducks/create-meal.duck'
// ACTIONS
import { logoutAction } from '../../auth/logout-user.action'
// LOGIC
import { createMeal } from '../../../logic/meals/create-meal'
// SELECTORS
import { getAccessToken } from '../../../selectors/auth.selectors'
import { getFormValues } from '../../../selectors/create-meal.selectors'

export function createMealAction () {
  return function (dispatch, getState) {
    const state = getState()
    const token = getAccessToken(state)
    const mealData = getFormValues(state)

    dispatch(createMealBegin())
    createMeal(token, mealData)
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


