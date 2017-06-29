// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
import { FieldArray } from 'redux-form/immutable'
// COMPONENTS
import SubTitle from '../../../UtilsComponents/SubTitle/SubTitle'
import IngredientsList from './IngredientsList/IngredientsList'
// STYLES
import './IngredientsForm.scss'

class IngredientsForm extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'IngredientsForm')
  }

  render () {
    return (
      <div className={this.className()}>
        <SubTitle label='Type list of ingredients' />
        <FieldArray
          component={IngredientsList}
          name='ingredients'
          changeValue={this.props.changeValue}
            />
      </div>
    )
  }
}

IngredientsForm.propTypes = {
  changeValue: PropTypes.func
}
IngredientsForm.defaultProps = {}

export default IngredientsForm
