import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const TransporterStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransporterScreen" component={SCREENS.TransporterScreen} />
      {/* Add more transporter-specific screens here */}
    </Stack.Navigator>
  );
};

export default TransporterStack;
