// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// COMPONENTS
import { Field } from 'redux-form/immutable'
import Input from '../../../../UtilsComponents/Input/Input'
import SearchableIngredient from '../SearchableIngredient/SearchableIngredient'
// CONSTANTS
import { units } from '../../../../../constants/global.constants'
// STYLES
import './SingleIngredient.scss'

class SingleIngredient extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'SingleIngredient')
    this.state = {
      ingredientDetails: null
    }
  }

  setIngredientFromDB (details) {
    const nutrients = {}
    details.nutrients.map((nutrient) => {
      const key = nutrient.nutrient.toLowerCase()
      nutrients[key] = nutrient.gm
    })
    this.props.setNutrientFromDb(this.props.index, nutrients)
    this.props.changeValue(`${this.props.fieldName}.name`, details.name)
    this.props.changeValue(`${this.props.fieldName}.unit`, units.gram.name)
    this.setState({
      ingredientDetails: {
        name: details.name,
        ndbno: details.ndbno,
        nutrients,
        unit: units.gram
      }
    })
  }

  resetIngredient () {
    this.props.changeValue(`${this.props.fieldName}.name`, '')
    this.props.changeValue(`${this.props.fieldName}.unit`, '')
    this.setState({
      ingredientDetails: null
    })
  }

  renderCatalogIngredient () {
    const { fieldName } = this.props
    return (
      <div className={this.className('singleIngredient')} key={fieldName}>
        <div className={this.className('name')}>
          <div onClick={this.resetIngredient.bind(this)} className={this.className('toStandard')}>X</div>
          <Field name={`${fieldName}.name`} component={Input} disabled />
        </div>
        <div className={this.className('amount')}>
          <Field name={`${fieldName}.amount`} component={Input} />
        </div>
        <div className={this.className('unit')}>
          <Field name={`${fieldName}.unit`} component={Input} disabled />
        </div>
      </div>
    )
  }

  renderUserIngredient () {
    const { fieldName } = this.props
    return (
      <div className={this.className('singleIngredient')} key={fieldName}>
        <div className={this.className('name')}>
          <SearchableIngredient name={`${fieldName}.name`} setFromDB={this.setIngredientFromDB.bind(this)} />
        </div>
        <div className={this.className('amount')}>
          <Field name={`${fieldName}.amount`} component={Input} />
        </div>
        <div className={this.className('unit')}>
          <Field name={`${fieldName}.unit`} component={Input} />
        </div>
      </div>
    )
  }

  render () {
    return this.state.ingredientDetails
      ? this.renderCatalogIngredient()
      : this.renderUserIngredient()
  }
}

SingleIngredient.propTypes = {
  fieldName: PropTypes.string,
  setNutrientFromDb: PropTypes.func
}
SingleIngredient.defaultProps = {}

export default SingleIngredient
