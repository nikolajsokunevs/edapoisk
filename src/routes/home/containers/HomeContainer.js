import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => ({
  counter: state.counterReducer.count
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch({ type: 'INCREMENT', payload: 1 })
  },
  onDecrement: () => {
    dispatch({ type: 'DECREMENT', payload: 1 })
  },
  onReset: () => {
    dispatch({ type: 'RESET', payload: 1 })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
