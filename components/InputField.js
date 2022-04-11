import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import SecText from './SecText'

const InputField = ({ label, placeholder, secure, handleValue }) => {
  const changeHandler = (text) => {
    handleValue(
      (value) => {
        const newValue = Object.assign(value)
        newValue[label] = text.toLowerCase().trim()
        return newValue
      }
    )
  }
  return (
    <View style={{
      width: '100%', marginVertical: 12
    }}>
      <SecText >{label}</SecText>

      <TextInput secureTextEntry={secure} style={styles.input} placeholder={placeholder} onChangeText={(text) => changeHandler(text)} />
    </View>

  )
}

export default InputField

const styles = StyleSheet.create({
  input: {
    color: COLORS.black,
    width: '100%',
    textAlign: 'left',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgray,
  }
})