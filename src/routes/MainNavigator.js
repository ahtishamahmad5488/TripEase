import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
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
          name="RegistrationScreen"
          component={SCREENS.RegistrationScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={SCREENS.HomeScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
