import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AdminScreen" component={SCREENS.AdminScreen} />
      <Stack.Screen name="CreatePlanScreen" component={SCREENS.CreatePlanScreen} />
      {/* Add more admin-specific screens here */}
    </Stack.Navigator>
  );
};

export default AdminStack;
