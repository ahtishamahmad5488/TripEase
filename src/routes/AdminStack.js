import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AdminDashboardScreen" component={SCREENS.AdminDashBoardScreen} />
      {/* <Stack.Screen
        name="CreatePlanScreen"
        component={SCREENS.CreatePlanScreen}
      />
      <Stack.Screen name="CreateBidding" component={SCREENS.CreateBidding} /> */}
      {/* <Stack.Screen
        name="EditProfileScreen"
        component={SCREENS.EditProfileScreen}
      /> */}
      {/* <Stack.Screen
        name="ViewAllBiddings"
        component={SCREENS.ViewAllBiddings}
      />
      <Stack.Screen name="ViewAllPlans" component={SCREENS.ViewAllPlans} />
      <Stack.Screen
        name="ViewAllBookings"
        component={SCREENS.ViewAllBookings}
      /> */}
    </Stack.Navigator>
  );
};

export default AdminStack;
