import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SplashScreen"
        component={SCREENS.SplashScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={SCREENS.LoginScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SCREENS.SignUpScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={SCREENS.ForgotPasswordScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={SCREENS.OTPScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={SCREENS.NewPasswordScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
