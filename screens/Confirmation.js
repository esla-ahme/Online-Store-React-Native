import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable, Image } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS } from '../constants';


const CELL_COUNT = 4;

const Confirmation = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <View style={styles.bottomView}>
        <Text>resend code</Text>
        <Pressable style={styles.btnCircle}>
          <Image style={styles.arrow} source={require('../assets/arrow.png')} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Confirmation

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 40,
    minHeight: 300,
    backgroundColor: COLORS.white,
    width: '100%'
  },
  title: { textAlign: 'center', fontSize: 26, marginTop: 16 },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  bottomView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    bottom: 20,
    padding: 20
  },
  btnCircle: {
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});