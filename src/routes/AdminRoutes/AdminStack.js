import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminTab from './AdminTab';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={AdminTab} />
    </Stack.Navigator>
  );
};

export default AdminStack;
