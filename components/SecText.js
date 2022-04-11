import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const SecText = ({ children }) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

export default SecText

const styles = StyleSheet.create({
  text: {
    color: COLORS.darkgray,
    textAlign: 'left',
    fontWeight: '400'
  }
})