// ACTIONS
import { getMealsBegin, getMealsEnd } from '../../ducks/meals.duck'
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
        dispatch(getMealsEnd(err))
      })

  }
}