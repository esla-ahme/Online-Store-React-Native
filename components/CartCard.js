import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import SecText from './SecText'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../atoms'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CartCard = ({ navigation, route, id, img, title, quantity, price, count }) => {

  const [itemCount, setItemCount] = useState(count)
  const [cart, setCart] = useRecoilState(cartAtom)


  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Deleted',
    });
  }


  const removeFromCart = () => {
    let newCart = []
    if (cart.length !== 1) {
      newCart = cart.filter(p => p.id !== id)
    }
    storeData(newCart)

    setCart(newCart)
    showToast()
  }
  const increase = () => {
    setItemCount(itemCount + 1)
    const newCart = cart.map(p => {
      if (p.id == id) {
        return {
          ...p, count: itemCount + 1
        }
      }
      return p
    })
    storeData(newCart)

    setCart(newCart)

  }
  const decrease = () => {
    const newCount = itemCount - 1 ? itemCount - 1 : itemCount
    setItemCount(newCount)
    const newCart = cart.map(p => {
      if (p.id == id) {
        return {
          ...p, count: newCount
        }
      }
      return p
    })
    setCart(newCart)

    storeData(newCart)
  }

  const storeData = async (newCart) => {
    try {
      const jsonValue = JSON.stringify(newCart)
      await AsyncStorage.setItem('cart', jsonValue)
    } catch (e) {
      return
    }
  }

  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img} />

      <View style={{ flex: 1, justifyContent: 'center' }} >
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flex: 1, }}>
            <Text style={styles.title}>{title}</Text>
            <SecText >${quantity}, Price</SecText>

          </View>
          <Pressable style={styles.add} onPress={removeFromCart}>
            <Text style={{ fontSize: 20, color: COLORS.black }}>×</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>

          {
            //count
            <View style={styles.count}>
              <Pressable style={styles.add} onPress={decrease}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.darkgray }}>-</Text>
              </Pressable>
              <Text style={{ marginHorizontal: 12 }}>{itemCount}</Text>
              <Pressable style={styles.add} onPress={increase}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.green }}>+</Text>
              </Pressable>
            </View>
          }
          <Text style={styles.title}>{(price * itemCount).toFixed(2)}$</Text>

        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


      </View>
    </View >
  )
}

export default CartCard

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.lightgray
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: 12

  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  add: {
    backgroundColor: COLORS.white,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.lightgray,
    borderWidth: 1,
  },
  count: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }

})