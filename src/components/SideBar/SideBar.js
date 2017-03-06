// LIBS
import React, { PureComponent, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import bemClassname from 'bem-classname'
// CONSTS
import { sidebarMenu } from '../../constants/sidebar.consts'
// STYLES
import './SideBar.scss'

class SideBar extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'SideBar')
  }

  createItemsList () {
    return sidebarMenu.map((menuItem, index) => {
      menuItem.indexRoute
        ? console.log('IndexRoute')
        : console.log('Route')
      return menuItem.indexRoute
        ? (<IndexLink
          to={menuItem.linkTo}
          className={this.className('item')}
          activeClassName='active'
          key={index}>
          {menuItem.label}
        </IndexLink>)
        : (<Link
          to={menuItem.linkTo}
          className={this.className('item')}
          activeClassName='active'
          key={index}>
          {menuItem.label}
        </Link>)
    })
  }

  render () {
    const sidebarItems = this.createItemsList()
    return (
      <div className={this.className()}>
        {sidebarItems}
      </div>
    )
  }
}

SideBar.propTypes = {}
SideBar.defaultProps = {}

export default SideBar
