// LIBS
import { connect } from 'react-redux'
import TopBar from '../../components/TopBar/TopBar'
// ACTIONS
import { logoutAction } from '../../actions/auth/logout-user.action'
import { getUserBasicInfoAction } from '../../actions/user/get-user-basic-info.action'
// SELECTORS
import { getBasicUserInfo } from '../../selectors/user.selectors'

function mapStateToProps (state) {
  return {
    userInfo: getBasicUserInfo(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logoutUser () {
      dispatch(logoutAction())
    },
    getUserInfo () {
      dispatch(getUserBasicInfoAction())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
