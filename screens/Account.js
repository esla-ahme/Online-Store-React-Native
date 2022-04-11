import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { cartAtom } from '../atoms'
import CartCard from '../components/CartCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainButton from '../components/MainButton'
import { totalPrice } from '../selectors'
import { userAtom } from '../readonly-atoms'
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../firebaseConfig'

const auth = getAuth(firebaseApp);

const Account = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userAtom)
  console.log(user)
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null)
      navigation.navigate('GetStarted')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image resizeMode='contain' width={50} height={50} source={{ uri: user?.photoURL }} />
        <View>
          <Text>{user.displayName}</Text>
          <Text>{user.email}</Text>
        </View>

      </View>

      <MainButton title="Log Out" color="#777" press={logout} />
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 32,
    alignItems: 'center'
  },
  profile: {
    flexDirection: 'row'
  }
})