// import React from 'react';
// import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
// import UpdateProfileCard from '../../components/Admin/UpdateProfileCard';
// import DashboardStatsCards from '../../components/Admin/DashboardStatsCards';
// import RecentActivityList from '../../components/Admin/RecentActivityList';
// import TransporterBiddingList from '../../components/Admin/TransporterBiddingList';
// import UpcomingToursTable from '../../components/Admin/UpcomingToursTable';
// import AcceptedBidsList from '../../components/Admin/AcceptedBidsList';

// const AdminPanel = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={'dark-content'} />
//       <ScrollView>
//         <UpdateProfileCard />
//         <DashboardStatsCards />
//         <RecentActivityList />
//         <UpcomingToursTable />
//         <TransporterBiddingList />
//         <AcceptedBidsList />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });

// export default AdminPanel;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { ICONS } from '../../constants/icons';

const AdminScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <ICONS.titleIcon />
        <TouchableOpacity onPress={() => {}}>
          <ICONS.logoIcon style={{ right: 20 }} />
        </TouchableOpacity>
      </View>

      {/* Dashboard Title */}
      <View style={{ marginTop: 30 }}>
        <Text style={styles.heading}>Admin</Text>
        <Text style={styles.heading}>Dashboard</Text>
      </View>

      {/* Admin Menu Cards */}
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CreatePlanScreen')}>
          <Text style={styles.cardText}>Create Tour Plan</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('UpdatePlanScreen')}>
          <Text style={styles.cardText}>Update / Delete Plans</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ManageTransportersScreen')}>
          <Text style={styles.cardText}>Manage Transporters</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ManageBiddingsScreen')}>
          <Text style={styles.cardText}>View & Manage Biddings</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AllBookingsScreen')}>
          <Text style={styles.cardText}>All Bookings</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.cardText}>Edit Profile</Text>
          <ICONS.arrowIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2D3E50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'space-between',
  },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2D3E50',
    fontWeight: '500',
  },
});

export default AdminScreen;
