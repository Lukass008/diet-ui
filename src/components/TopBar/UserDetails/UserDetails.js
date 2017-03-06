// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'

// STYLES
import './UserDetails'

class UserDetails extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'UserDetails')
  }

  render () {
    return (
      <div className={this.className()}>
        <div className={this.className('photo')} />
        <div className={this.className('userName')}>{this.props.userName}</div>
      </div>
    )
  }
}

UserDetails.propTypes = {
  userName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  onSettingsClick: PropTypes.func,
  onLogoutClick: PropTypes.func
}
UserDetails.defaultProps = {
  photoUrl: ''
}

export default UserDetails
