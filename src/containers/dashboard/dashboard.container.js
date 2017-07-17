// LIBS
import { connect } from 'react-redux'
import Dashboard from '../../components/Dashboard/Dashboard'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
