import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import SecText from '../components/SecText'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import MainButton from '../components/MainButton'

const Location = ({ navigation }) => {
  const [country, setCountry] = useState('Egypt')
  const [city, setCity] = useState('Cairo')

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/map.png')} />
      <Text style={styles.title}>Select your location</Text>
      <SecText>Switch on your location to stay in tune with</SecText>
      <SecText>what's happening in your area</SecText>
      {/* <View style={styles.inputs}>
        <Text style={{ textAlign: 'left', color: COLORS.darkgray }}>Country</Text>
       
        <CountryDropdown
          style={{
            padding: 8,
            borderWidth: 0,
            borderBottomWidth: 1,
            backgroundColor: COLORS.white,
            borderBottomColor: COLORS.lightgray,
            marginTop: 8,
            marginBottom: 16

          }}
          value={country}
          onChange={(val) => setCountry(val)} />
        <Text style={{ textAlign: 'left', color: COLORS.darkgray }}>City</Text>
        <RegionDropdown
          style={{
            padding: 8,
            borderWidth: 0,
            borderBottomWidth: 1,
            backgroundColor: COLORS.white,
            borderBottomColor: COLORS.lightgray,
            marginTop: 8,
            marginBottom: 16

          }}
          country={country}
          value={city}
          onChange={(val) => setCity(val)} />
      </View> */}
      <View style={{ width: '60%' }}>
        <MainButton title='Submit' />
      </View>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: 130,
    resizeMode: 'contain',
    marginVertical: 16,
    flex: 1


  },
  title: {
    textAlign: 'center', fontSize: 26,
    marginTop: 16,
    marginBottom: 8
  },
  inputs:
  {
    flex: 2,
    width: '100%',
    padding: 20,

  }

})