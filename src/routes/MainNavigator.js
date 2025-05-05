import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigator from './TabNavigator';



const Stack = createNativeStackNavigator();
const CustomerStack = createNativeStackNavigator();
const TransporterStack = createNativeStackNavigator();

//---Customer Stack
export const CustomerStackScreens = () => (
  <CustomerStack.Navigator screenOptions={{ headerShown: false }}>
    <CustomerStack.Screen name="HomeScreen" component={TabNavigator} />
    <CustomerStack.Screen name="DetailScreen" component={SCREENS.DetailScreen} />
    <CustomerStack.Screen
      name="CreateBookingScreen"
      component={SCREENS.CreateBookingScreen}
    />
    <CustomerStack.Screen name="PaymentScreen" component={SCREENS.PaymentScreen} />
  </CustomerStack.Navigator>
);

//---Transporter Stack
export const TransporterStackScreen = () => (
  <TransporterStack.Navigator screenOptions={{ headerShown: false }}>
    <TransporterStack.Screen
      name="TransporterScreen"
      component={SCREENS.TransporterScreen}
    />
    <TransporterStack.Screen name="AdminScreen" component={SCREENS.AdminScreen} />
  </TransporterStack.Navigator>
);

// Main App Navigator
const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check auth status on app start
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setIsLoggedIn(true);
          setUserRole(userData.role);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  if (isLoading) {
    // You can return a loading screen or null while checking auth status
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          // Auth Screens
          <>
            <Stack.Screen name="SplashScreen" component={SCREENS.SplashScreen} />
            <Stack.Screen name="LoginScreen" component={SCREENS.LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SCREENS.SignUpScreen} />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={SCREENS.ForgotPasswordScreen}
            />
            <Stack.Screen name="OTPScreen" component={SCREENS.OTPScreen} />
            <Stack.Screen
              name="NewPasswordScreen"
              component={SCREENS.NewPasswordScreen}
            />
          </>
        ) : userRole === 'Customer' ? (
          // Customer Stack
          <Stack.Screen name="CustomerStack" component={SCREENS.CustomerStackScreens} />
        ) : (
          // Transporter Stack
          <Stack.Screen name="TransporterStack" component={SCREENS.TransporterStackScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;