import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const MainButton = ({ title, press, icon, color }) => {
  return (
    <Pressable onPress={press} style={[styles.btn, { backgroundColor: color || COLORS.green }]}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  )
}

export default MainButton

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    paddingVertical: 18,
    borderRadius: 8,
    marginVertical: 16

  },
  btnText: {
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 16,
  }
})