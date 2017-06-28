// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
import { Field } from 'redux-form/immutable'
// COMPONENTS
import Input from '../../../../UtilsComponents/Input/Input'
import SearchableIngredient from '../SearchableIngredient/SearchableIngredient'
// STYLES
import './IngredientsInputs.scss'

class IngredientsInputs extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'IngredientsInputs')
  }

  renderIngredientsInputs () {
    const { fields } = this.props
    return fields.map((field) => {
      return this.renderSingleIngredient(field)
    })
  }

  renderSingleIngredient (field) {
    return (
      <div className={this.className('singleIngredient')} key={field}>
        <div className={this.className('name')}>
          <SearchableIngredient name={`${field}.name`} />
        </div>
        <div className={this.className('amount')}>
          <Field name={`${field}.amount`} component={Input} />
        </div>
        <div className={this.className('unit')}>
          <Field name={`${field}.unit`} component={Input} />
        </div>
      </div>
    )
  }

  renderLabels () {
    return (
      <div className={this.className('ingredientsLabels')}>
        {this.renderLabel('name')}
        {this.renderLabel('amount')}
        {this.renderLabel('unit')}
      </div>
    )
  }

  renderLabel (label) {
    return (
      <div className={this.className(label)}>
        <div className={this.className('label')}>
          {label}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={this.className()}>
        {this.renderLabels()}
        {this.renderIngredientsInputs()}
      </div>
    )
  }
}

IngredientsInputs.propTypes = {}
IngredientsInputs.defaultProps = {}

export default IngredientsInputs
