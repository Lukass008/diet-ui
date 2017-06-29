// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'SearchableIngredient')
    this.state = {
      ingredients: null
    }
    // we need to do this to proper remove event listener after every update
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidUpdate () {
    if (this.state.ingredients && this.state.ingredients.length) {
      window.addEventListener('click', this.handleClickOutside)
    } else {
      window.removeEventListener('click', this.handleClickOutside)
    }
  }

  handleClickOutside (e) {
    if (this.inputArea && !this.inputArea.contains(e.target)) {
      this.hideList()
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
          ingredients: res.list.item
        })
      })
      .catch((err) => {
        console.log('err', err)
        this.hideList()
      })
  }

  hideList () {
    this.setState({
      ingredients: null
    })
  }

  renderOpenedList () {
    if (!this.state.ingredients || !this.state.ingredients.length) { return null }
    return (
      <div className={this.className('openedList')}>
        {this.renderFilteredIngredients()}
      </div>
    )
  }

  selectIngredient (ndbno) {
    this.hideList()
    getIngredientDetails(ndbno)
      .then((res) => {
        this.setState({
          ingredients: null
        })
        this.props.setFromDB(res.report.foods[0])
      })
  }

  renderFilteredIngredients () {
    return this.state.ingredients.map((ingredient) => {
      return <div
        className={this.className('listItem')}
        onClick={this.selectIngredient.bind(this, ingredient.ndbno)}
        key={ingredient.ndbno}
      >
        {ingredient.name}
      </div>
    })
  }

  render () {
    return (
      <div className={this.className()} ref={(el) => { this.inputArea = el }}>
        <div className={this.className('inputWrapper')}>
          <Field
            name={this.props.name}
            component={Input}
            onChange={this.searchIngredient.bind(this)}
          />
        </div>
        {this.renderOpenedList()}
      </div>
    )
  }
}

SearchableIngredient.propTypes = {
  name: PropTypes.string,
  setFromDB: PropTypes.func
}
SearchableIngredient.defaultProps = {}

export default SearchableIngredient
