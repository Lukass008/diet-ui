// LIBS
import { connect } from 'react-redux'
import TopBar from '../../components/TopBar/TopBar'
// ACTIONS
import { logoutAction } from '../../actions/auth/logout-user.action'


function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    logoutUser () {
      dispatch(logoutAction())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
