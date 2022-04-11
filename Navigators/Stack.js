
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Confirmation from '../screens/Confirmation';
import Location from '../screens/Location';



const Stack = createNativeStackNavigator();

export default StackNav = () => {

  return (

    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false, }} name="Splash" component={Splash} />
      <Stack.Screen options={{ headerShown: false, }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false, }} name="Location" component={Location} />
      <Stack.Screen options={{ headerShown: false, }} name="Confirmation" component={Confirmation} />
      <Stack.Screen options={{ headerShown: false, }} name="Signup" component={Signup} />
      <Stack.Screen options={{ headerShown: false, }} name="GetStarted" component={GetStarted} />
    </Stack.Navigator >
  )

}