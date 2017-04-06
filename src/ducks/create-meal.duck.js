import { createAction, handleActions } from 'redux-actions'
import { Map, List, fromJS } from 'immutable'

export const createMealBegin = createAction('DIET/MEALS/CREATE/BEGIN')
export const createMealEnd = createAction('DIET/MEALS/CREATE/END')
export const validateInput = createAction('DIET/MEALS/CREATE/VALIDATE/NAME')

const initialState = Map({
  basicForm: Map({
    name: Map({
      valid: false,
      errorMessage: 'Name Field is required'
    }),
    description: Map({
      valid: true
    }),
    photo: Map({
      valid: true
    })
  }),
  ingredientsForm: List([
    Map({
      valid: false,
      errorMessage: 'At least one ingredient should be provided'
    })
  ])
})

// REDUCER
export default handleActions({
  [createMealBegin().type]: (state) => {
    return state.set('creating', true)
  },
  [createMealEnd().type]: (state, action) => {
    return state
      .set('creating', false)
  },
  [validateInput().type]: (state, action) => {
    return state
      .set(action.payload.form, fromJS(action.payload.validation))
  }
}, initialState)
