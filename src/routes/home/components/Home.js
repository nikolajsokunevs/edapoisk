import React from 'react'
import { View, Text, Button } from 'react-native'

class Home extends React.Component {
  clickPlus = () => {
    this.props.onIncrement()
  }

  clickMinus = () => {
    this.props.onDecrement()
  }

  clickReset = () => {
    this.props.onReset()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Counter is: {this.props.counter}</Text>
        <Button onPress={this.clickPlus} title="+" />
        <Button onPress={this.clickMinus} title="-" />
        <Button onPress={this.clickReset} title="0" />
      </View>
    )
  }
}

export default Home
