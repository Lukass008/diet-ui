import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import configureStore from './store/configureStore.dev'
import routes from './routes'
import './styles/styles.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)} />
  </Provider>, document.getElementById('app')
)
