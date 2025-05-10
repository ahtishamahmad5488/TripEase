import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {SCREENS} from '../constants/screens';
import {COLORS} from '../constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CreateStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="ViewAllPlans"
      component={SCREENS.ViewAllPlans}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="ViewAllBiddings"
      component={SCREENS.ViewAllBiddings}
      options={{animation: 'slide_from_bottom'}}
    />
  </Stack.Navigator>
);

const AdminTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let label;
          if (route.name === 'AdminDashBoardScreen') {
            label = 'Home';
          } else if (route.name === 'CreateBidding') {
            label = 'Bidding';
          } else if (route.name === 'CreatePlanScreen') {
            label = 'Plans';
          } else if (route.name === 'PaymentScreen') {
            label = 'Payment';
          }
          return (
            <View style={styles.iconContainer}>
              <Text
                style={[
                  styles.label,
                  focused ? styles.activeLabel : styles.inactiveLabel,
                ]}>
                {label}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: COLORS.primaryLightGrayHex,
        tabBarInactiveTintColor: COLORS.primaryBlackHex,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen name="AdminDashBoardScreen" component={SCREENS.AdminDashBoardScreen} />
      <Tab.Screen name="CreateBidding" component={SCREENS.CreateBidding} />
      <Tab.Screen
        name="CreatePlanScreen"
        component={SCREENS.CreatePlanScreen}
      />
      <Tab.Screen name="PaymentScreen" component={SCREENS.PaymentScreen} />
    </Tab.Navigator>
  );
};

export default AdminTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false, // Removes extra font padding
  },
  //   activeLabel: {
  //     color: 'red',
  //   },
  //   inactiveLabel: {
  //     color: 'gray',
  //   },
});
