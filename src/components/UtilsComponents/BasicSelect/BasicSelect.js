// LIBS
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import bemClassname from 'bem-classname'
import immutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
// STYLES
import './BasicSelect.scss'

class BasicSelect extends PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'BasicSelect')
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.state = {
      isOpened: false,
      active: {
        key: 'all',
        label: 'All Types'
      }
    }
  }

  componentDidUpdate () {
    if (this.state.isOpened) {
      window.addEventListener('click', this.handleClickOutside)
    } else {
      window.removeEventListener('click', this.handleClickOutside)
    }
  }

  handleClickOutside (event) {
    if (this.selectArea && !this.selectArea.contains(event.target)) {
      this.setState({ isOpened: false })
    }
  }

  renderOpenedList () {
    const items = this.props.itemsList.toJS().map((item, index) => {
      const { key, label } = item
      if (key === this.state.active.key) { return }
      return <div className={this.className('item')} key={key} onClick={this.onSelect.bind(this, {key, label})}>{label}</div>
    })

    return <div className={this.className('openedList')}>
      {items}
    </div>
  }

  onSelect (item) {
    this.closeList()
    this.setState({
      active: item
    })
  }

  openList () {
    const currentValue = this.state.isOpened
    this.setState({
      isOpened: !currentValue
    })
  }

  closeList () {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const { label } = this.props
    const openedList = this.state.isOpened && this.renderOpenedList()
    return (
      <div className={this.className()}>
        <div className={this.className('label')}>{label}</div>
        <div className={this.className('select')} onClick={this.openList.bind(this)} ref={(listDiv) => (this.selectArea = listDiv)}>
          {this.state.active.label}
        </div>
        {openedList}
      </div>
    )
  }
}

BasicSelect.propTypes = {
  label: PropTypes.string,
  itemsList: immutablePropTypes.list
}
BasicSelect.defaultProps = {
  itemsList: List([])
}

export default BasicSelect
