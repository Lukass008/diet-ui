import { combineReducers } from 'redux-immutable'

import auth from '../ducks/auth.duck'
import meals from '../ducks/meals.duck'
import user from '../ducks/user.duck'
import createMeal from '../ducks/create-meal.duck'

const rootReducer = combineReducers({
  auth,
  meals,
  user,
  createMeal
})

export default rootReducer
