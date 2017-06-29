// LIBS
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// COMPONENTS
import NutrientsTable from '../NutrientsTable/NutrientsTable'
import SingleIngredient from '../SingleIngredient/SingleIngredient'
// STYLES
import './IngredientsList.scss'

class IngredientsList extends Component {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'IngredientsList')
    this.state = {
      nutrientsFromDB: {}
    }
  }

  addIngredient () {
    this.props.fields.push({})
  }

  renderRemoveBtns (fields) {
    if (fields && fields.length < 2) { return null }
    return fields.map((field, index) => {
      return (
        <div
          className={this.className('removeBtn')}
          onClick={() => fields.remove(index)}
          key={field}
        >
          X
        </div>
      )
    })
  }

  setNutrientFromDb (index, details) {
    this.state.nutrientsFromDB[index] = details
  }

  renderIngredients () {
    const ingredients = this.props.fields.map((field, index) => {
      return <SingleIngredient
        fieldName={field}
        key={field}
        changeValue={this.props.changeValue}
        setNutrientFromDb={this.setNutrientFromDb.bind(this)}
        index={index}
      />
    })
    return (
      <div className={this.className('ingredients')}>
        {this.renderLabels()}
        {ingredients}
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
    const { fields } = this.props
    if (!fields.length) {
      this.addIngredient()
    }

    // TODO: Clean up this shit!!!
    // TODO: pass amount values to NutrientsTable
    // TODO: consider to create container for NutrientsTable

    return (
      <div className={this.className()}>
        <div className={this.className('removeButtons')}>
          {this.renderRemoveBtns(fields)}
        </div>
        <div className={this.className('ingredientsList')}>
          {this.renderIngredients()}
          <button className={this.className('addBtn')} onClick={this.addIngredient.bind(this)}>
            + ADD INGREDIENT
          </button>
        </div>
        <div className={this.className('nutrientsTable')}>
          <NutrientsTable
            fields={fields}
            fromDB={this.state.nutrientsFromDB} />
        </div>
      </div>
    )
  }
}

IngredientsList.propTypes = {
  fields: PropTypes.object,
  changeValue: PropTypes.func
}
IngredientsList.defaultProps = {}

export default IngredientsList
