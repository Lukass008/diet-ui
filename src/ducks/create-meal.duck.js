// LIBS
import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const createMealBegin = createAction('DIET/MEALS/CREATE/BEGIN')
export const createMealEnd = createAction('DIET/MEALS/CREATE/END')

const initialState = Map({
  creating: false
})

// REDUCER
export default handleActions({
  [createMealBegin().type]: (state) => {
    return state.set('creating', true)
  },
  [createMealEnd().type]: (state) => {
    return state
      .set('creating', false)
  }
}, initialState)
