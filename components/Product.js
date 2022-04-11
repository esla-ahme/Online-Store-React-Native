import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import SecText from './SecText'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../atoms'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Product = ({ navigation, route, id, img, title, quantity, price }) => {
  const [cart, setCart] = useRecoilState(cartAtom)
  const showToast = (type, text1) => {
    Toast.show({
      type,
      text1
    });
  }
  const addToCart = () => {
    const temp = cart.filter(p => p.name == title)
    if (temp.length === 1) {
      showToast('info', 'Already added to your cart')
    }
    else {
      const item = {
        name: title,
        img,
        quantity,
        count: 1,
        price,
        id,
        totalPrice: price
      }
      setCart([...cart, item])
      showToast('success', 'added to your cart')
      storeData()

    }
  }

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(cart)
      await AsyncStorage.setItem('cart', jsonValue)
    } catch (e) {
      return
    }
  }

  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img} />

      <View style={{ width: '100%', flex: 1, justifyContent: 'center' }} >
        <Text style={styles.title}>{title}</Text>
        <SecText >${quantity}, Price</SecText>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>{price}</Text>
        <Pressable style={styles.add} onPress={addToCart}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.white }}>+</Text>
        </Pressable>

      </View>
    </View >
  )
}

export default Product

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: 160,
    margin: 5,
    padding: 10,

    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.lightgray
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10

  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  add: {
    backgroundColor: COLORS.green,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,

  }
})