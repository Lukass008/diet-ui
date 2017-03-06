import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'
import { Map, fromJS } from 'immutable'

export default function () {
  const storage = window.localStorage['diet-api']
  const initialState = storage ? fromJS(JSON.parse(storage)) : Map({})
  const middlewares = [ thunkMiddleware ]
  const combineMiddlewares = applyMiddleware(...middlewares)

  const enhancer = compose(
    combineMiddlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(rootReducer, initialState, enhancer)

  return store
}
