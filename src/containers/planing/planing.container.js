// LIBS
import { connect } from 'react-redux'
import Planing from '../../components/Planing/Planing'

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
)(Planing)
