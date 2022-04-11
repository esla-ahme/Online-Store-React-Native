import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('GetStarted'), 2500)
  })
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green
  },
  logo: {
    width: '70%',
    resizeMode: 'contain'
  }
})