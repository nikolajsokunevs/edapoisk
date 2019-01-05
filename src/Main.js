import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import HomeContainer from './routes/home/containers/HomeContainer'

const store = createStore(reducer)

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    )
  }
}
