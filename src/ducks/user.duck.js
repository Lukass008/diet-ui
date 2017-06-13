import { createAction, handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'

export const getUserBasicInfoBegin = createAction('DIET/USER/BASIC_INFO/BEGIN')
export const getUserBasicInfoEnd = createAction('DIET/USER/BASIC_INFO/END')

const initialState = Map({})

// REDUCER
export default handleActions({
  [getUserBasicInfoBegin().type]: (state) => {
    return state
      .set('loading', true)
  },
  [getUserBasicInfoEnd().type]: (state, action) => {
    return state
      .set('loading', false)
      .set('info', fromJS(action.payload))
  }
}, initialState)
