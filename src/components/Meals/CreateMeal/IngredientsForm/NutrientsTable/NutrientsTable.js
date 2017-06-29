// LIBS
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// COMPONENTS
import { Field } from 'redux-form/immutable'
import Input from '../../../../UtilsComponents/Input/Input'
// STYLES
import './NutrientsTable.scss'

class NutrientsTable extends Component {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'NutrientsTable')
  }
  renderNutrientsTable () {
    return (
      <table cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th>Proteins</th>
            <th>Carbo</th>
            <th>Fats</th>
            <th>KCal</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows () {
    const { fields } = this.props
    return fields.map((field) => {
      return this.renderSingleRow(field)
    })
  }

  renderSingleRow (field) {
    return (
      <tr key={field}>
        <td><Field name={`${field}.proteins`} component={Input} /></td>
        <td><Field name={`${field}.carbo`} component={Input} /></td>
        <td><Field name={`${field}.fats`} component={Input} /></td>
        <td><Field name={`${field}.kcal`} component={Input} /></td>
      </tr>
    )
  }

  render () {
    return (
      <div className={this.className()}>
        {this.renderNutrientsTable()}
      </div>
    )
  }
}

NutrientsTable.propTypes = {
  fields: PropTypes.object,
  fromDB: PropTypes.object
}
NutrientsTable.defaultProps = {}

export default NutrientsTable
