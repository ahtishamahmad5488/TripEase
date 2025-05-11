import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';


const Stack = createNativeStackNavigator();

const TransporterStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransporterScreen" component={SCREENS.TransporterScreen} />
      <Stack.Screen
          name="RegistrationScreen"
          component={SCREENS.RegistrationScreen}
        />
         <Stack.Screen
          name="ViewAvailableBiddingScreen"
          component={SCREENS.ViewAvailableBiddingsScreen}
        />
        <Stack.Screen
          name="AcceptedBiddingScreen"
          component={SCREENS.AcceptedBiddingsScreen}
        />
    </Stack.Navigator>
  );
};

export default TransporterStack;
