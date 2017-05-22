// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// CONTAINERS
import BasicFormContainer from '../../../containers/meals/create-meal/basic-form.container'
import IngredientsFormContainer from '../../../containers/meals/create-meal/ingredients-form.container'
// STYLES
import './CreateMeal.scss'

class CreateMeal extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'CreateMeal')
  }

  createMeal () {
    this.props.createMeal()
  }

  render () {
    return (
      <div className={this.className()}>
        <BasicFormContainer />
        <IngredientsFormContainer />
        <button
          disabled={!this.props.isFormValid}
          className={this.className('saveBtn')}
          onClick={this.createMeal.bind(this)}
        >
          Create
        </button>
      </div>
    )
  }
}

CreateMeal.propTypes = {
  createMeal: PropTypes.func,
  isFormValid: PropTypes.bool
}
CreateMeal.defaultProps = {}

export default CreateMeal
