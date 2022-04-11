import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import GetStarted from './screens/GetStarted';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Confirmation from './screens/Confirmation';
import Location from './screens/Location';
import Categories from './screens/Categories';
import Products from './screens/Products';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import Cart from './screens/Cart';
import Toast from 'react-native-toast-message';
import { useAuthentication } from './utils/useAuthentication';
import { useEffect } from 'react';
import TabNav from './Navigators/Tab';
import StackNav from './Navigators/Stack';
import { userAtom } from './readonly-atoms';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

function App() {
  const { user } = useAuthentication();

  useEffect(() => {


  }, [user])
  return (
    <>
      <RecoilRoot>
        <NavigationContainer>
          {user ?
            <TabNav /> : <StackNav />
          }
        </NavigationContainer>
      </RecoilRoot>
      <Toast />
    </>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
