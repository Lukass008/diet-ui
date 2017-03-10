import { createAction, handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'

export const getMealsBegin = createAction('DIET/AUTH/LOGIN')
export const getMealsEnd = createAction('DIET/AUTH/LOGIN_BEGIN')

const initialState = Map({
  loading: false
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
