// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// COMPONENTS
import IngredientsInputs from '../IngredientsInputs/IngredientsInputs'
import NutrientsTable from '../NutrientsTable/NutrientsTable'
// STYLES
import './IngredientsList.scss'

class IngredientsList extends PureComponent {
  constructor() {
    super()
    this.className = bemClassname.bind(null, 'IngredientsList')
  }

  addIngredient () {
    this.props.fields.push({})
  }

  renderRemoveBtns (fields) {
    if (fields && fields.length < 2) { return null }
    return fields.map((field, index) => {
      return (
        <div className={this.className('removeBtn')} onClick={() => fields.remove(index)}>X</div>
      )
    })
  }

  render() {
    const { fields } = this.props
    if (!fields.length) {
      this.addIngredient()
    }

    return (
      <div className={this.className()}>
        <div className={this.className('removeButtons')}>
          {this.renderRemoveBtns(fields)}
        </div>
        <div className={this.className('ingredientsList')}>
          <IngredientsInputs fields={fields} />
          <button className={this.className('addBtn')} onClick={this.addIngredient.bind(this)}>
            + ADD INGREDIENT
          </button>
        </div>
        <div className={this.className('nutrientsTable')}>
          <NutrientsTable fields={fields} />
        </div>
      </div>
    )
  }
}

IngredientsList.propTypes = {}
IngredientsList.defaultProps = {}

export default IngredientsList