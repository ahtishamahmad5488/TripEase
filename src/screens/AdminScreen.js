// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   StatusBar,
// } from 'react-native';
// import {ICONS} from '../constants/icons';
// import {COLORS} from '../constants/colors';
// import CustomTextInput from '../components/CustomTextField';
// import CustomButton from '../components/CustomButton';

// const PaymentScreen = ({navigation}) => {
//   const biddingData = [
//     {
//       id: '1',
//       transportName: 'Ali Transport',
//       bidAmount: '5000 PKR',
//       status: 'Pending',
//     },
//     {
//       id: '2',
//       transportName: 'Khan Movers',
//       bidAmount: '4500 PKR',
//       status: 'Pending',
//     },
//   ];
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={{flex: 1}}>
//           <ScrollView contentContainerStyle={styles.scrollContainer}>
//             <ICONS.titleIcon style={{marginTop: 30}} />
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primaryWhiteHex,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
// });

// export default PaymentScreen;

import React from 'react';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
import UpdateProfileCard from '../components/Admin/UpdateProfileCard';
import DashboardStatsCards from '../components/Admin/DashboardStatsCards';
import RecentActivityList from '../components/Admin/RecentActivityList';
import TransporterBiddingList from '../components/Admin/TransporterBiddingList';
import UpcomingToursTable from '../components/Admin/UpcomingToursTable';
import AcceptedBidsList from '../components/Admin/AcceptedBidsList';

const AdminPanel = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <UpdateProfileCard />
        <DashboardStatsCards />
        <RecentActivityList />
        <UpcomingToursTable />
        <TransporterBiddingList />
        <AcceptedBidsList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AdminPanel;
