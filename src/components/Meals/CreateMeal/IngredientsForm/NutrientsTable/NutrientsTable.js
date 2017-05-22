// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// STYLES
import './NutrientsTable.scss'

class NutrientsTable extends PureComponent {
  constructor() {
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
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    )
  }

  render() {
    return (
      <div className={this.className()}>
        {this.renderNutrientsTable()}
      </div>
    )
  }
}

NutrientsTable.propTypes = {}
NutrientsTable.defaultProps = {}

export default NutrientsTable