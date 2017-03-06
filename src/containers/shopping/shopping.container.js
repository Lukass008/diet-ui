// LIBS
import { connect } from 'react-redux'
import Shopping from '../../components/Shopping/Shopping'

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
)(Shopping)
