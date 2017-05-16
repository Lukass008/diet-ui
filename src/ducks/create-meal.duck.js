// LIBS
import { createAction, handleActions } from 'redux-actions'
import { Map, List, fromJS } from 'immutable'
// CONSTANTS
import { INITIAL_ERRORS } from '../constants/create-meal.constants'

export const createMealBegin = createAction('DIET/MEALS/CREATE/BEGIN')
export const createMealEnd = createAction('DIET/MEALS/CREATE/END')
// basic form
export const setBasicNameValue = createAction('DIET/MEALS/CREATE/BASIC_FORM/NAME/SET_VALUE')
export const setBasicNameError = createAction('DIET/MEALS/CREATE/BASIC_FORM/NAME/SET_ERROR')
export const removeBasicNameError = createAction('DIET/MEALS/CREATE/BASIC_FORM/NAME/REMOVE_ERROR')
export const setBasicDescriptionValue = createAction('DIET/MEALS/CREATE/BASIC_FORM/DESeCRIPTION/SET_VALUE')
export const setBasicDescriptionError = createAction('DIET/MEALS/CREATE/BASIC_FORM/DESCRIPTION/SET_ERROR')
export const removeBasicDescriptionError = createAction('DIET/MEALS/CREATE/BASIC_FORM/DESCRIPTION/REMOVE_ERROR')


const initialState = Map({
  basicForm: Map({
    name: Map({
      valid: false,
      errorMessage: INITIAL_ERRORS.BASIC_NAME,
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
      ingredients: List([
        Map({
          id: 1,
          name: '',
          amount: '',
          unit: '',
          proteins: null,
          carbohydrates: null,
          fats: null,
          kcal: null
        })
      ]),
      valid: false,
      errorMessage: INITIAL_ERRORS.INGREDIENTS_FORM
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
  [setBasicNameValue().type]: (state, action) => {
    return state
      .setIn(['basicForm', 'name', 'value'], action.payload)
  },
  [setBasicNameError().type]: (state, action) => {
    return state
      .setIn(['basicForm', 'name', 'valid'], false)
      .setIn(['basicForm', 'name', 'errorMessage'], action.payload)
  },
  [removeBasicNameError().type]: (state) => {
    return state
      .setIn(['basicForm', 'name', 'valid'], true)
      .deleteIn(['basicForm', 'name', 'errorMessage'])
  },
  [setBasicDescriptionValue().type]: (state, action) => {
    return state
      .setIn(['basicForm', 'description', 'value'], action.payload)
  },
  [setBasicDescriptionError().type]: (state, action) => {
    return state
      .setIn(['basicForm', 'description', 'valid'], false)
      .setIn(['basicForm', 'description', 'errorMessage'], action.payload)
  },
  [removeBasicDescriptionError().type]: (state) => {
    return state
      .setIn(['basicForm', 'description', 'valid'], true)
      .deleteIn(['basicForm', 'description', 'errorMessage'])
  }
}, initialState)
