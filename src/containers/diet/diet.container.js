// LIBS
import { connect } from 'react-redux'
import Diet from '../../components/Diet/Diet'

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
)(Diet)
