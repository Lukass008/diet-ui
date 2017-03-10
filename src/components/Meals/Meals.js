// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
// COMPONENTS
import ContainerHeader from '../ContainerHeader/ContainerHeader'
// STYLES
import './Meals.scss'

class Meals extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Meals')
  }

  componentWillMount() {
    this.props.getMeals()
  }

  render () {
    return (
      <div className={this.className()}>
        <ContainerHeader title='Meals' />
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
