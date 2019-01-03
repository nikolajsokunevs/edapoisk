import React, { Component } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'

class Main extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.imgBackground}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default Main
