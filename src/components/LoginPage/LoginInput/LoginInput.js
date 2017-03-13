// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './LoginInput.scss'

class LoginInput extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'LoginInput')
  }

  handleChange (event) {
    this.props.handleChange(this.props.name, event.target.value)
  }

  render () {
    const { label, type, value } = this.props
    return (
      <div className={this.className()}>
        <div className={this.className('label')}>{label}</div>
        <input type={type} value={value} onChange={this.handleChange.bind(this)} required />
      </div>
    )
  }
}

LoginInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string
}
LoginInput.defaultProps = {
  type: 'text'
}

export default LoginInput
