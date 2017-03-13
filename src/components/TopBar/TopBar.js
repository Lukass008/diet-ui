// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import UserDetails from './UserDetails/UserDetails'
import Logo from './Logo/Logo'
// STYLES
import './TopBar.scss'

class TopBar extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'TopBar')
  }

  logoutUser () {
    this.props.logoutUser()
  }

  render () {
    return (
      <div className={this.className()}>
        <Logo />
        <UserDetails userName='Łukasz Lizoń' />
        <div onClick={this.logoutUser.bind(this)}>LOGOUT</div>
      </div>
    )
  }
}

TopBar.propTypes = {}
TopBar.defaultProps = {}

export default TopBar
