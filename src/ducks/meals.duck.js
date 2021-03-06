import { createAction, handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'

export const getMealsBegin = createAction('DIET/MEALS/GET_MEALS/BEGIN')
export const getMealsEnd = createAction('DIET/MEALS/GET_MEALS/END')

const initialState = Map({
  loading: false,
  creating: false
})

// REDUCER
export default handleActions({
  [getMealsBegin().type]: (state) => {
    return state.set('loading', true)
  },
  [getMealsEnd().type]: (state, action) => {
    return state
      .set('loading', false)
      .set('mealsList', fromJS(action.payload))
  }
}, initialState)
