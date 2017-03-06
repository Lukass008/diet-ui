// LIBS
import { connect } from 'react-redux'
import LoginPage from '../../components/LoginPage/LoginPage'
// ACTIONS
import { loginAction } from '../../actions/auth/login-user.action'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser (user) {
      dispatch(loginAction(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)