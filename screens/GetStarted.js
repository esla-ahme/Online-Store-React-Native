import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import MainButton from '../components/MainButton'

const GetStarted = ({ navigation }) => {

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
      <View style={styles.body}>
        <Image style={styles.logo} source={require('../assets/whitecarrot.png')} />
        <Text style={styles.mainText}>Welcome{'\n'}to out store</Text>
        <Text style={styles.secText}>Get your groceries as fast as one hour</Text>
        <MainButton title="Get Started" press={() => navigation.navigate('Signup')} />
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 64

  },
  logo: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    marginBottom: 16
  },
  body: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  mainText: {
    textAlign: 'center',
    fontSize: 36,
    color: COLORS.white,
    fontWeight: '700'
  },
  secText: {
    textAlign: 'center',
    color: COLORS.lightgray,
    fontWeight: '400'
  }
})