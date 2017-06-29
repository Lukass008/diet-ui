// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// STYLES
import './Input.scss'

class Input extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Input')
  }

  renderErrorAndWarning () {
    const { meta: { touched, error, warning } } = this.props
    if (!touched) { return null }
    return (
      <div className={this.className('errorContainer')}>
        { error && <div className={this.className('errorMessage')}>{error}</div> }
        { warning && <div className={this.className('warningMessage')}>{warning}</div> }
      </div>
    )
  }

  render () {
    const { type, input, properties, style, meta: { touched, error } } = this.props
    return (
      <div className={this.className({error: touched && error})}>
        <input
          {...input}
          type={type}
          style={style}
          disabled={this.props.disabled}
          {...properties}
        />
        {this.renderErrorAndWarning()}
      </div>
    )
  }
}

Input.propTypes = {
  type: PropTypes.string,
  properties: PropTypes.object,
  style: PropTypes.object
}
Input.defaultProps = {
  type: 'text',
  style: {}
}

export default Input
