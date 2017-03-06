import React, { PureComponent, PropTypes } from 'react'

class App extends PureComponent {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App