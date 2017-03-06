// LIBS
import React, { PureComponent, PropTypes } from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import TopbarContainer from '../../containers/topbar/topbar.container'
import SidebarContainer from '../../containers/sidebar/sidebar.container'
// STYLES
import './Dashboard.scss'

class Dashboard extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'Dashboard')
  }

  render () {
    return (
      <div className={this.className()}>
        <div className={this.className('topbarWrapper')}>
          <TopbarContainer />
        </div>
        <div className={this.className('mainWrapper')}>
          <div className={this.className('sidebarWrapper')}>
            <SidebarContainer />
          </div>
          <div className={this.className('contentWrapper')}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
