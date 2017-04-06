// LIBS
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// CONTAINERS
import LoginContainer from './containers/login/login.container'
import AppContainer from './containers/app/app.container'
import DashboardContainer from './containers/dashboard/dashboard.container'
import ProfileContainer from './containers/profile/profile.container'
import DietContainer from './containers/diet/diet.container'
import PlaningContainer from './containers/planing/planing.container'
import ShoppingContainer from './containers/shopping/shopping.container'
import MealsContainer from './containers/meals/meals.container'
import CreateMealContainer from './containers/meals/create-meal'
// COMPONENTS
import Meals from './components/Meals/Meals'

// UTILS
import { checkIfLogged, checkIfNotLogged } from './logic/auth/check-auth'

export default function (store) {
  const NotFound = () =>
    <div>
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>

  return (
    <Route component={AppContainer}>
      <Route path='/login' component={LoginContainer} onEnter={checkIfNotLogged(store)} />
      <Route path='/' component={DashboardContainer} onEnter={checkIfLogged(store)}>
        <IndexRoute component={ProfileContainer} />
        <Route path='meals' component={Meals}>
          <IndexRoute component={MealsContainer} />
          <Route path='create' component={CreateMealContainer} />
        </Route>
        <Route path='diet' component={DietContainer} />
        <Route path='plan' component={PlaningContainer} />
        <Route path='shopping' component={ShoppingContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  )
}
