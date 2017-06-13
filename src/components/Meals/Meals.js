// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
// COMPONENTS
import ContainerHeader from '../UtilsComponents/ContainerHeader/ContainerHeader'
import CardSwitcher from '../UtilsComponents/CardSwitcher/CardSwitcher'
// CONSTANTS
import { mealsCards } from '../../constants/meals.constants'
// STYLES
import './Meals.scss'

class Meals extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Meals')
  }

  render () {
    return (
      <div className={this.className()}>
        <ContainerHeader title='Meals' />
        <CardSwitcher cards={mealsCards} />
        {this.props.children}
      </div>
    )
  }
}

Meals.propTypes = {
  getMeals: PropTypes.func,
  mealsList: immutablePropTypes.list
}
Meals.defaultProps = {
  mealsList: List([])
}

export default Meals
