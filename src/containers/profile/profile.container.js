// LIBS
import { connect } from 'react-redux'
import Profile from '../../components/Profile/Profile'

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
)(Profile)
