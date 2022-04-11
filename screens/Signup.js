import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants'
import SecText from '../components/SecText'
import InputField from '../components/InputField'
import MainButton from '../components/MainButton'
import firebaseApp, { db } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const auth = getAuth();

const Signup = ({ navigation }) => {

  const [userData, setUserData] = useState({
    Email: '',
    Password: '',
    Name: ''
  })


  const handleSignup = async () => {
    if (userData.Email === '' || userData.Password === '') {
      Toast.show({
        type: 'error',
        text1: 'Email and passwor are mandatory'
      });
      return;
    }
    try {
      const signedUser = await createUserWithEmailAndPassword(auth, userData.Email, userData.Password);
      await setDoc(doc(db, "users", signedUser.user.uid), {
        id: signedUser.user.uid,
        name: userData.Name,
        email: userData.Email
      });
      navigation.navigate('Login');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.message
      })
    }

    //navigation.navigate('Login')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/coloredcarrot.png')} />
        <View style={styles.form} >
          <Text style={styles.title}>Sign Up</Text>
          <SecText>Enter your credential to continue</SecText>
          <View style={styles.inputs}>
            <InputField label="Name" placeholder='Enter your name' handleValue={setUserData} />
            <InputField label="Email" placeholder='Enter your email' handleValue={setUserData} />
            <InputField label="Password" placeholder='Enter your password' secure handleValue={setUserData} />
          </View>
          <SecText>By continuing tou agree to our Terms of Service and Privacty Policy</SecText>
          <MainButton press={handleSignup} title="Sign Up" />
          <View style={{ flexDirection: 'row', marginBottom: 16 }}><Text style={{ fontWeight: 'bold' }}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}><Text style={{ color: COLORS.green, fontWeight: 'bold' }}> Login</Text></Pressable>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginVertical: 48
  },
  form: {
    flex: 1,

    width: '100%',
    alignItems: 'flex-start'
  },
  title: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 8
  },
  inputs: {
    marginTop: 16,
    width: '100%'
  }
})