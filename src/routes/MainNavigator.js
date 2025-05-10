import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';
import { useAuth } from '../context/AuthContext';
import CustomerStack from './CustomerStack';
import TransporterStack from './TransporterStack';
import AdminStack from './AdminStack';
import AdminTab from './AdminTab';

const Stack = createNativeStackNavigator();

// Main App Navigator
const MainNavigator = () => {
  const { role } = useAuth();

  if (!role) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
        <Stack.Screen name="DetailScreen" component={SCREENS.DetailScreen} />
        <Stack.Screen
          name="CreateBookingScreen"
          component={SCREENS.CreateBookingScreen}
        />
        <Stack.Screen name="PaymentScreen" component={SCREENS.PaymentScreen} />
        <Stack.Screen
          name="TransporterScreen"
          component={SCREENS.TransporterScreen}
        />
        <Stack.Screen name="AdminScreen" component={SCREENS.AdminScreen} />
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
        <Stack.Screen
          name="CreatePlanScreen"
          component={SCREENS.CreatePlanScreen}
        />
        <Stack.Screen
          name="AdminDashboardScreen"
          component={AdminTab}
        />
         <Stack.Screen
          name="CreateBidding"
          component={SCREENS.CreateBidding}
        />
         <Stack.Screen
          name="EditProfileScreen"
          component={SCREENS.EditProfileScreen}
        />
         <Stack.Screen
          name="ViewAllBiddings"
          component={SCREENS.ViewAllBiddings}
        />
          <Stack.Screen
          name="ViewAllPlans"
          component={SCREENS.ViewAllPlans}
        />
        <Stack.Screen
          name="ViewAllBookings"
          component={SCREENS.ViewAllBookings}
        />
        
      </Stack.Navigator>
    );
  }
  return role === 'customer' ? (
    <CustomerStack />
  ) : role === 'transporter' ? (
    <TransporterStack />
  ) : (
    <AdminStack />
  );
};

export default MainNavigator;
