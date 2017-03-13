// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
// COMOPNENTS
import MealsFilters from '../MealsFilters/MealsFilters'
import SingleMeal from '../SingleMeal/SingleMeal'
// STYLES
import './MealsList.scss'

class MealsList extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'MealsList')
  }

  renderMeals () {
    return this.props.mealsList.map((meal, index) => {
      return <SingleMeal key={index + meal.get('name')} mealData={meal} />
    })
  }

  render () {
    const mealsList = this.renderMeals()
    return (
      <div className={this.className()}>
        <MealsFilters />
        <div className={this.className('list')}>
          {mealsList}
        </div>
      </div>
    )
  }
}

MealsList.propTypes = {
  mealsList: immutablePropTypes.list
}
MealsList.defaultProps = {
  mealsList: List([])
}

export default MealsList
