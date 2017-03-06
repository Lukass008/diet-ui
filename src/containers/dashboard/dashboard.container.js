// LIBS
import { connect } from 'react-redux'
import Dashboard from '../../components/Dashboard/DashBoard'

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
