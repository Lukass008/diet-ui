// LIBS
import React, { PureComponent } from 'react'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
import { Map } from 'immutable'
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

  componentWillMount () {
    if (!this.props.userInfo.size) { this.props.getUserInfo() }
  }

  render () {
    const name = this.props.userInfo.get('name') || ''
    const surname = this.props.userInfo.get('surname') || ''
    const media = this.props.userInfo.get('media')
    const thumbnail = media
      ? media.get('thumbnail')
      : undefined

    return (
      <div className={this.className()}>
        <Logo />
        <UserDetails
          userName={`${name} ${surname}`}
          thumbnail={thumbnail}
          onLogoutClick={this.logoutUser.bind(this)}
          />
      </div>
    )
  }
}

TopBar.propTypes = {
  userInfo: immutablePropTypes.map
}
TopBar.defaultProps = {
  userInfo: Map({})
}

export default TopBar
