// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {SCREENS} from '../constants/screens';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: () => {
//           let iconName;
//           if (route.name === 'HomeScreen') {
//             iconName = 'Home';
//           } else if (route.name === 'BookingScreen') {
//             iconName = 'Booking';
//           } else if (route.name === 'About') {
//             iconName = 'About';
//           } else if (route.name === 'Map') {
//             iconName = 'Map';
//           }
//           return <View>{iconName}</View>;
//         },
//         tabBarActiveTintColor: '#000',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//       <Tab.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
//       <Tab.Screen name="BookingScreen" component={SCREENS.BookingScreen} />
//       <Tab.Screen name="AboutScreen" component={SCREENS.AboutUsScreen} />
//       <Tab.Screen name="MapScreen" component={SCREENS.MapScreen} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet, Text} from 'react-native';
// import {SCREENS} from '../constants/screens';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: () => {
//           let label;
//           if (route.name === 'HomeScreen') {
//             label = 'Home';
//           } else if (route.name === 'BookingScreen') {
//             label = 'Booking';
//           } else if (route.name === 'AboutUsScreen') {
//             label = 'About';
//           } else if (route.name === 'MapScreen') {
//             label = 'Map';
//           }
//           return <Text>{label}</Text>;
//         },
//         // tabBarActiveTintColor: '#000',
//         // tabBarInactiveTintColor: 'gray',
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarStyle: styles.tabBarStyle,
//       })}>
//       <Tab.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
//       <Tab.Screen name="BookingScreen" component={SCREENS.BookingScreen} />
//       <Tab.Screen name="AboutUsScreen" component={SCREENS.AboutUsScreen} />
//       <Tab.Screen name="MapScreen" component={SCREENS.MapScreen} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet, Text, View} from 'react-native';
// import {SCREENS} from '../constants/screens';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let label;
//           if (route.name === 'HomeScreen') {
//             label = 'Home';
//           } else if (route.name === 'BookingScreen') {
//             label = 'Booking';
//           } else if (route.name === 'AboutUsScreen') {
//             label = 'About';
//           } else if (route.name === 'MapScreen') {
//             label = 'Map';
//           }
//           return (
//             <View style={styles.labelContainer}>
//               <Text
//                 style={[
//                   styles.label,
//                   focused ? styles.activeLabel : styles.inactiveLabel,
//                 ]}>
//                 {label}
//               </Text>
//             </View>
//           );
//         },
//         tabBarActiveTintColor: 'lightgray',
//         tabBarInactiveTintColor: 'black',
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarStyle: styles.tabBarStyle,
//         tabBarItemStyle: styles.tabBarItemStyle,
//       })}>
//       <Tab.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
//       <Tab.Screen name="BookingScreen" component={SCREENS.BookingScreen} />
//       <Tab.Screen name="AboutUsScreen" component={SCREENS.AboutUsScreen} />
//       <Tab.Screen name="MapScreen" component={SCREENS.MapScreen} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     backgroundColor: 'white',
//     borderTopWidth: 0, // Removes the top border of the tab bar
//     elevation: 0, // Removes shadow for Android
//     shadowOpacity: 0, // Removes shadow for iOS
//     height: 60, // Adjust height if needed
//   },
//   labelContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//     marginTop: 10,
//   },
//   tabBarItemStyle: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   activeLabel: {
//     color: 'lightgray',
//   },
//   inactiveLabel: {
//     color: 'black',
//   },
// });
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {SCREENS} from '../constants/screens';
import {COLORS} from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let label;
          if (route.name === 'HomeScreen') {
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
      <Tab.Screen name="HomeScreen" component={SCREENS.HomeScreen} />
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
    includeFontPadding: false, // Removes extra font padding
  },
  //   activeLabel: {
  //     color: 'red',
  //   },
  //   inactiveLabel: {
  //     color: 'gray',
  //   },
});
