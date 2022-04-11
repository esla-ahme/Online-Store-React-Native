import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'
import Product from '../components/Product'
import { useRecoilValue } from 'recoil'
import { cateProducts } from '../selectors'

const Products = ({ navigation, route }) => {
  const catProducts = useRecoilValue(cateProducts)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <Image style={styles.icon} source={require('../assets/arrow.png')} />
        <TextInput style={{ flex: 1 }} placeholder='search' onChangeText={() => (null)} onSubmitEditing={() => null} />
      </View>
      <View style={styles.categories}>
        {catProducts.map(p => <Product key={p.id} id={p.id} title={p.name} quantity={p.quantity} price={p.price} img={p.img} />)}
      </View>

    </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    backgroundColor: COLORS.white
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
  categories: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: 48,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})