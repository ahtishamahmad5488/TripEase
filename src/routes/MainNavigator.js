import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';
import {useAuth} from '../context/AuthContext';
import AdminTab from './AdminTab';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

// Main App Navigator
const MainNavigator = () => {
  const {isAuthenticated, role} = useAuth();

  console.log('MainNavigator auth state:', {isAuthenticated, role});

  // Authentication Screens
  // if (!isAuthenticated) {
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
        <Stack.Screen name="AdminDashBoardScreen" component={AdminTab} />
        <Stack.Screen
          name="ViewAllBiddings"
          component={SCREENS.ViewAllBiddings}
        />
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
        <Stack.Screen name="DetailScreen" component={SCREENS.DetailScreen} />
        <Stack.Screen
          name="CreateBookingScreen"
          component={SCREENS.CreateBookingScreen}
        />
        <Stack.Screen name="PaymentScreen" component={SCREENS.PaymentScreen} />
        <Stack.Screen name="ViewAllPlans" component={SCREENS.ViewAllPlans} />
        <Stack.Screen
          name="TransporterScreen"
          component={SCREENS.TransporterScreen}
        />
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
          name="PlansScreen"
          component={SCREENS.PlansScreen}
        />
        <Stack.Screen
          name="CreatePlanScreen"
          component={SCREENS.CreatePlanScreen}
        />
        <Stack.Screen
          name="CreatePlanDetailScreen"
          component={SCREENS.CreatePlanDetailScreen}
        />
        <Stack.Screen
          name="BiddingScreen"
          component={SCREENS.BiddingScreen}
        />
        <Stack.Screen
          name="CreateBidding"
          component={SCREENS.CreateBidding}
        />
        <Stack.Screen
          name="ViewAllAcceptedBiddings"
          component={SCREENS.ViewAllAcceptedBiddings}
        />
      </Stack.Navigator>
    );
  // }
  console.log('Navigating to stack for role:', role);
  // Authenticated Screens
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Customer Flow */}
      {role === 'customer' && (
        <>
          <Stack.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
          <Stack.Screen name="DetailScreen" component={SCREENS.DetailScreen} />
        </>
      )}

      {/* Transporter Flow */}
      {role === 'transporter' && (
        <>
          <Stack.Screen
            name="TransporterScreen"
            component={SCREENS.TransporterScreen}
          />
        </>
      )}

      {/* Admin Flow (when role is null) */}
      {!role && (
        <>
          <Stack.Screen
            name="AdminDashBoardScreen"
            component={SCREENS.AdminDashBoardScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
