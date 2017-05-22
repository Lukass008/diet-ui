// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
// STYLES
import './Textarea.scss'

class Textarea extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Textarea')
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
    const { input, properties, style, meta: { touched, error } } = this.props

    return (
      <div className={this.className({error: touched && error})}>
        <textarea
          {...input}
          style={style}
          {...properties}
        />
        {this.renderErrorAndWarning()}
      </div>
    )
  }
}

Textarea.propTypes = {
  style: PropTypes.object,
  properties: PropTypes.object
}
Textarea.defaultProps = {
  style: {}
}

export default Textarea
