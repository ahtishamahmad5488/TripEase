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
          options={{animation: 'slide_from_bottom'}}
        />
         <Stack.Screen
          name="ViewAvailableBiddingScreen"
          component={SCREENS.ViewAvailableBiddingsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="AcceptedBiddingScreen"
          component={SCREENS.AcceptedBiddingsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
    </Stack.Navigator>
  );
};

export default TransporterStack;
