// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import Icon from '../../UtilsComponents/Icon/Icon'
// RESOURCES
import logoutIcon from '../../../assets/icons/logout.svg'
import settingsIcon from '../../../assets/icons/settings.svg'
// STYLES
import './UserDetails.scss'

class UserDetails extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'UserDetails')
  }

  render () {
    const photoBg = this.props.thumbnail
      ? { backgroundImage: `url(${this.props.thumbnail})` }
      : {}
    return (
      <div className={this.className()}>
        <div className={this.className('photo')} style={photoBg} />
        <div className={this.className('userName')}>{this.props.userName}</div>
        <Icon svgIcon={settingsIcon} className={this.className('icon')} />
        <Icon svgIcon={logoutIcon} className={this.className('icon')} onClick={this.props.onLogoutClick.bind(this)} />
      </div>
    )
  }
}

UserDetails.propTypes = {
  userName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  onSettingsClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
  thumbnail: PropTypes.string
}
UserDetails.defaultProps = {
  photoUrl: ''
}

export default UserDetails
