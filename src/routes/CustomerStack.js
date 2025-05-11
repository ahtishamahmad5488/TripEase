import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();

const CustomerStack = () => 
   (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
      <Stack.Screen name="DetailScreen" component={SCREENS.DetailScreen} />
      <Stack.Screen
        name="CreateBookingScreen"
        component={SCREENS.CreateBookingScreen}
      />
      <Stack.Screen name="PaymentScreen" component={SCREENS.PaymentScreen} />
    </Stack.Navigator>
  );


export default CustomerStack;
