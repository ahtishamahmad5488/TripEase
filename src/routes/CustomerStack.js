import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
      {/* Add more customer-specific screens here */}
    </Stack.Navigator>
  );
};

export default CustomerStack;
