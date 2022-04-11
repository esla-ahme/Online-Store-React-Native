import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import CatCard from '../components/CatCard'
import { COLORS } from '../constants'
import { useRecoilValue } from 'recoil'
import { allCategoriesAtom } from '../readonly-atoms'

const Categories = ({ navigation }) => {
  const allCategories = useRecoilValue(allCategoriesAtom)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.searchBar}>
        <Image style={styles.icon} source={require('../assets/arrow.png')} />
        <TextInput style={{ flex: 1 }} placeholder='search' onChangeText={() => (null)} onSubmitEditing={() => null} />
      </View>
      <ScrollView style={styles.categories} contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap', justifyContent: 'space-evenly'
      }}>
        {allCategories.map(cat => <CatCard key={cat.name} title={cat.name} navigation={navigation} color={cat.color} img={cat.img} />)}
      </ScrollView>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    backgroundColor: COLORS.white,
    flex: 1
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
    marginTop: 12

  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})