import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRecoilState } from 'recoil'
import { selCatAtom } from '../atoms'

const CatCard = ({ navigation, color, img, title }) => {
  const [selCat, setSelCat] = useRecoilState(selCatAtom)
  const goToCategory = () => {
    setSelCat(title)
    navigation.navigate('Products', { name: title })

  }
  return (

    <Pressable
      onPress={goToCategory}
      style={[{ backgroundColor: color + '10', borderColor: color + '30' }, styles.card]}>
      <Image source={img} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </Pressable >
  )
}

export default CatCard

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 150,
    margin: 10,
    padding: 10,

    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
})