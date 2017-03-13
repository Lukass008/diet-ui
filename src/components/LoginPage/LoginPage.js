// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// STYLES
import './LoginPage.scss'
// COMPONENTS
import LoginInput from './LoginInput/LoginInput'
// RECOURCES
import background from '../../assets/images/background2.png'

class LoginPage extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'LoginPage')
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  handleChange (key, value) {
    this.setState({
      [key]: value
    })
  }

  render () {
    const bgStyle = {backgroundImage: `url(${background})`}
    return (
      <div className={this.className()} style={bgStyle}>
        <form className={this.className('loginForm')} onSubmit={this.handleSubmit.bind(this)}>
          <LoginInput
            type='email'
            handleChange={this.handleChange.bind(this)}
            name='email'
            value={this.state.email}
            label='email' />
          <LoginInput
            type='password'
            handleChange={this.handleChange.bind(this)}
            name='password'
            value={this.state.password}
            label='password' />
          <button className={this.className('loginBtn')}>LOGIN</button>
        </form>
      </div>
    )
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func
}
LoginPage.defaultProps = {}

export default LoginPage
