// ACTIONS
import { getMealsBegin, getMealsEnd } from '../../ducks/meals.duck'
// LOGIC
import getMeals from '../../logic/meals/get-meals'

export function getMealsAction () {
  return function (dispatch, getState) {
    const state = getState()
    const token = state.get('auth').get('accessToken')

    dispatch(getMealsBegin())

    getMeals(token)
      .then((data) => {
      console.log('data', data)
        dispatch(getMealsEnd(data.data.meals))
      })
      .catch((err) => {
        dispatch(getMealsEnd(err))
      })

  }
}