// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './LoginPage.scss'
// CONSTS
import { user } from '../../../private/config'

class LoginPage extends PureComponent {
  constructor() {
    super()
    this.className = bemClassname.bind(null, 'LoginPage')
  }

  loginUser () {
    this.props.loginUser(user)
  }

  render() {
    return (
      <div className={this.className()}>
        <div onClick={this.loginUser.bind(this)}>LOGIN</div>
      </div>
    )
  }
}

LoginPage.propTypes = {}
LoginPage.defaultProps = {}

export default LoginPage