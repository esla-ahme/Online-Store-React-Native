import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { createRef, useEffect, useState } from 'react'
import { COLORS } from '../constants'
import MainButton from '../components/MainButton'
import PhoneInput from 'react-native-phone-input'
import SecText from '../components/SecText'
import { ErrorToast } from 'react-native-toast-message'
import InputField from '../components/InputField'

import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import * as Google from 'expo-google-app-auth'
import { userAtom } from '../readonly-atoms'
import { useRecoilState } from 'recoil'
const auth = getAuth();


const Login = ({ navigation }) => {
  const [gUser, setGUser] = useRecoilState(userAtom)



  const [valid, setValid] = useState()
  const [value, setValue] = useState()

  //login with mail and password
  const [userData, setUserData] = useState({
    Email: '',
    Password: '',
  })

  const handleLogin = async () => {
    if (userData.Email === '' || userData.Password === '') {
      Toast.show({
        type: 'error',
        text1: 'Email and password are mandatory'
      });
      return;
    }
    try {
      const signedUser = await signInWithEmailAndPassword(auth, userData.Email, userData.Password);
      console.log(signedUser)
      setGUser(signedUser.user)

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.message
      })
    }

    //navigation.navigate('Login')
  }



  //login with google
  const handleGoogleSignUp = () => {
    const config = {
      androidClientId: '212439364038-iqeugfbikot65pea4gdimjekpng0edv5.apps.googleusercontent.com',
      clientlientId: '212439364038-84cvoiecuavk7d4n4hk7m7nb65huea29.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    }
    Google.logInAsync(config).then(
      result => {
        const { type, idToken, user } = result;
        if (type == 'success') {
          const credential = GoogleAuthProvider.credential(idToken);

          // Sign in with credential from the Google user.
          signInWithCredential(auth, credential).then(result => {
            console.log(result)
            setGUser(result.user)
            //navigation.navigate('Products')

          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The credential that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log('error:', errorMessage)
            Toast.show({
              type: 'error',
              text: errorMessage
            })
          });
        }
      }
    ).catch(error =>
      console.log(error))
  }

  useEffect(() => {

    console.log(valid, value)
  }, [valid, value])

  const updateInfo = () => {
    setValid(phone.current.isValidNumber())
    setValue(phone.current.getValue())
  }
  const phone = createRef()
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'flex-end' }}>
      <Image style={styles.upper} source={require('../assets/veg.png')} />
      <View style={styles.body}>
        <Text style={styles.mainText}>Get tour groceries{'\n'}with nectar</Text>

        <View style={styles.inputs}>
          <InputField label="Email" placeholder='Enter your email' handleValue={setUserData} />
          <InputField label="Password" placeholder='Enter your password' secure handleValue={setUserData} />
        </View>
        <MainButton press={handleLogin} title="Login" />

        <View style={styles.phone}>
          <PhoneInput ref={phone} style={{ flex: 1 }}
            initialCountry={'eg'}
            textStyle={{ backgroundColor: COLORS.white, height: 40, paddingLeft: 8 }}
            textProps={{
              placeholder: 'Enter your phone'
            }}
          />
          <Pressable onPress={updateInfo} style={{
            paddingHorizontal: 10,
            width: 40, backgroundColor: COLORS.google,
            borderRadius: 20, borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              style={styles.arrow}
              source={require('../assets/arrow.png')} />
          </Pressable>
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <SecText>or continue with social media</SecText>
        </View>
        <MainButton title="Continue with Google" color={COLORS.google} press={handleGoogleSignUp} />
        <MainButton title="Continue with Facebook" color={COLORS.facebook} press={() => navigation.navigate('Signup')} />

      </View>
    </ScrollView>
  )
}

export default Login

const h = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
    backgroundColor: '#fff',
    width: '100%'
  },
  upper: {
    top: -100,
    left: 50,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
    transform: [{ rotateZ: '30deg' }],

  },
  body: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    width: '100%',
    flex: 1
  },
  mainText: {
    fontSize: 30,
    color: COLORS.black,
    fontWeight: '700'

  },
  arrow: {
    width: 20, height:
      20,
    resizeMode: 'contain'
  },
  phone: {
    flexDirection: "row",
    backgroundColor: 'white',
    marginVertical: 8,
  },
  inputs: {
    marginTop: 16,
    width: '100%'
  }
})