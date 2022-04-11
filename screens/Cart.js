import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { cartAtom } from '../atoms'
import CartCard from '../components/CartCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainButton from '../components/MainButton'
import { totalPrice } from '../selectors'


const Cart = ({ navigation }) => {
  const allCategories = useRecoilValue(cartAtom)
  const setCart = useSetRecoilState(cartAtom)
  const overAllPrice = useRecoilValue(totalPrice)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('cart')
      if (value !== null) {
        setCart(JSON.parse(value))
      }
    } catch (e) {
      // error reading value
      setCart([])
    }
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <ScrollView style={styles.carts}>
        {allCategories.map(p => <CartCard key={p.id} id={p.id} title={p.name} price={p.price}
          quantity={p.quantity} count={p.count} navigation={navigation} img={p.img} />)}
      </ScrollView>
      <View width={'80%'}>
        <MainButton title={'Checkout: ' + overAllPrice + '$'} color={COLORS.green} />
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 32,
    alignItems: 'center'
  },
  searchBar: {
    marginHorizontal: 20,
    backgroundColor: COLORS.lightgray,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 10
  },
  carts: {
    width: '100%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  }
})