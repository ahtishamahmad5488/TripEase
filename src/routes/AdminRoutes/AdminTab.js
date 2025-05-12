import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {SCREENS} from '../../constants/screens';
import {COLORS} from '../../constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CreateStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="AdminDashBoardScreen"
      component={SCREENS.AdminDashBoardScreen}
      options={{animation: 'slide_from_bottom'}}
    />
  </Stack.Navigator>
);

const BiddingStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="BiddingScreen"
      component={SCREENS.BiddingScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="CreateBidding"
      component={SCREENS.CreateBidding}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="ViewAllBiddings"
      component={SCREENS.ViewAllBiddings}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="ViewAllAcceptedBiddings"
      component={SCREENS.ViewAllAcceptedBiddings}
      options={{animation: 'slide_from_bottom'}}
    />
  </Stack.Navigator>
);

const PlanStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="PlansScreen"
      component={SCREENS.PlansScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="CreatePlanScreen"
      component={SCREENS.CreatePlanScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="CreatePlanDetailScreen"
      component={SCREENS.CreatePlanDetailScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="ViewAllPlans"
      component={SCREENS.ViewAllPlans}
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
          if (route.name === 'HomeStack') {
            label = 'Home';
          } else if (route.name === 'BiddingStack') {
            label = 'Bidding';
          } else if (route.name === 'PlanStack') {
            label = 'Plans';
          } else if (route.name === 'ViewAllVehicle') {
            label = 'Vehicle';
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
      <Tab.Screen name="BiddingStack" component={BiddingStack} />
      <Tab.Screen name="PlanStack" component={PlanStack} />
      <Tab.Screen name="ViewAllVehicle" component={SCREENS.ViewAllVehicle} />
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
    includeFontPadding: false,
  },
});
