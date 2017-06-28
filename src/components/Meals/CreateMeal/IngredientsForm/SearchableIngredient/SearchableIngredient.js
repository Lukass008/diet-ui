// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import { Field } from 'redux-form/immutable'
import Input from '../../../../UtilsComponents/Input/Input'
// LOGIC
import searchIngredientByChunk from '../../../../../logic/ingredients/search-ingredients'
import getIngredientDetails from '../../../../../logic/ingredients/get-ingredients-details'
// STYLES
import './SearchableIngredient.scss'

class SearchableIngredient extends PureComponent {
  constructor() {
    super()
    this.className = bemClassname.bind(null, 'SearchableIngredient')
    this.state = {
      ingredients: null
    }
  }

  searchIngredient (e) {
    const value = e.target.value
    if (!value || value.length < 3) {
      this.hideList()
      return
    }
    searchIngredientByChunk(e.target.value)
      .then((res) => {
        this.setState({
          ingredients: res.list.item,
        })
      })
      .catch((err) => {
        this.hideList()
      })
  }

  hideList () {
    this.setState({
      ingredients: null,
    })
  }

  renderOpenedList() {
    if (!this.state.ingredients || !this.state.ingredients.length) { return null }
    return (
      <div className={this.className('openedList')}>
        {this.renderFilteredIngredients()}
      </div>
    )
  }

  selectIngredient (ndbno) {
    getIngredientDetails(ndbno.ndbno)
      .then((res) => {
        this.setState({
          ingredients: null
        })
      })
  }

  renderFilteredIngredients () {
    return this.state.ingredients.map((ingredient) => {
      return <div
        className={this.className('listItem')}
        onClick={() => this.selectIngredient(ingredient)}
        key={ingredient.ndbno}
      >
        {ingredient.name}
      </div>
    })
  }

  render() {
    return (
      <div className={this.className()}>
        <div className={this.className('inputWrapper')}>
          <Field
            name={this.props.name}
            component={Input}
            onChange={this.searchIngredient.bind(this)}
            onBlur={this.hideList.bind(this)}
          />
        </div>
        {this.renderOpenedList()}
      </div>
    )
  }
}

SearchableIngredient.propTypes = {
  name: PropTypes.string
}
SearchableIngredient.defaultProps = {}

export default SearchableIngredient