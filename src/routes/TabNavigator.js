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
      name="HomeScreen"
      component={SCREENS.HomeScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="DetailScreen"
      component={SCREENS.DetailScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="CreateBookingScreen"
      component={SCREENS.CreateBookingScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="PaymentScreen"
      component={SCREENS.PaymentScreen}
      options={{animation: 'slide_from_bottom'}}
    />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let label;
          if (route.name === 'HomeStack') {
            label = 'Home';
          } else if (route.name === 'BookingScreen') {
            label = 'Booking';
          } else if (route.name === 'AboutUsScreen') {
            label = 'About';
          } else if (route.name === 'MapScreen') {
            label = 'Map';
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
      <Tab.Screen name="HomeStack" component={CreateStack} />
      <Tab.Screen name="BookingScreen" component={SCREENS.BookingScreen} />
      <Tab.Screen name="AboutUsScreen" component={SCREENS.AboutUsScreen} />
      <Tab.Screen name="MapScreen" component={SCREENS.MapScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

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
    includeFontPadding: false,
  },
});
