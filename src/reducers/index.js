import { combineReducers } from 'redux-immutable'

import auth from '../ducks/auth.duck'
import meals from '../ducks/meals.duck'

const rootReducer = combineReducers({
  auth,
  meals
})

export default rootReducer
