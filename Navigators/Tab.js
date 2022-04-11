import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Categories from '../screens/Categories';
import Products from '../screens/Products';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Cart from '../screens/Cart';
import { COLORS } from '../constants';
import Account from '../screens/Account';

const Stack = createMaterialBottomTabNavigator();

export default TabNav = () => {

  return (

    <Stack.Navigator
      barStyle={{ backgroundColor: COLORS.white }}
    >

      <Stack.Screen name="Products" component={Products}
        options={({ route }) => ({ title: route.params.name })}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" size={24} color="black" />),
        }}
      />

      <Stack.Screen name="Cart" component={Cart}

        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-minus" size={24} color="black" />),
        }}
      />
      <Stack.Screen options={{ headerShown: false, }} name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color="black" />
          ),
        }}
      />


      <Stack.Screen name="Account" component={Account}
        options={({ route }) => ({ title: route.params.name })}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person-outline" size={24} color="black" />),
        }}
      />

    </Stack.Navigator >
  )

}